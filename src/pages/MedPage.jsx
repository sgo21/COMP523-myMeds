import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";
import {db} from '../firebase'
import { Button } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import Footer from '../components/Footer'
import ReviewForm from 'components/ReviewForm';
import Reviews from '../components/Reviews';
import '../css/MedPage.css';
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';
import { roundTenths } from '../helpers/formatting.jsx';
import { ReactComponent as CapsuleIcon } from '../img/capsule.svg';
import { v4 as uuidv4 } from 'uuid';

/* MedPage component takes in a string "medId" as a prop and renders the page containing the 
 information and reviews for the medication corresponding to that "medId" */ 

function MedPage ({ medId }) {
  const {currentUser} = useAuth();
  const history = useHistory();
  const [genericName, setGenericName] = useState("Generic Name");
  const [brandName, setBrandName] = useState("Brand Name");
  const [indication, setIndication] = useState("Med Type");
  const [reviewsArray, setReviewsArray] = useState([]);
  const [averageOverallRating, setAverageOverallRating] = useState(0);
  const [indexRating, setindexRating] = useState(0);
  const [noReviews, setNoReviews] = useState(true);
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getData() {
      // You can await here
      const doc = await db.collection('drug').doc(medId).get();
      setGenericName(doc.data().genericName);
      setBrandName(doc.data().brandName);
      setIndication(doc.data().indication);
      setDescription(doc.data().description);

      // getting all the reviews for this page's medicine 
      const reviewsSnapshot = await db.collection("drug").doc(medId).collection("Review").orderBy('createdAt', 'desc').get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, time: doc.data().createdAt, likeNumber: doc.data().likeNumber, likeUsers: doc.data().likeUsers}]]
          );
        })

      // calculating the average rating for this page's medicine
      let total = 0;
      let index = 0;
      reviewsSnapshot.forEach((doc) => {
        total = total + doc.data().rating;
        index = index + 1;
        setindexRating(index);
      })

      if(index === 0){
        setNoReviews(true);
      } else {
        setNoReviews(false);
        let ratingAverage = total/index;
        ratingAverage = roundTenths(ratingAverage, 2);
        setAverageOverallRating(ratingAverage)
      }
    }
    getData();
  }, [medId]); 

  // pushing the average rating that was just calculated to the database
  db.collection("drug").doc(medId).set({
    rating:averageOverallRating,
    reviews:indexRating,
  }, 
  {merge: true})

    return (
      <div data-testid='medpage' className="med-page-container">
        <div>
          <NavbarContainer/>
        </div>

        <div className="back-button outline-primary p-3">
          <Button onClick={e => {history.replace("/")}} className="my-3" variant="primary" > Back to Home</Button>
        </div>
           
        <div className="med-page-content text-left w-75 bg-white">
            <h1 className="display-4 show-whitespace">
              <CapsuleIcon width="55" height="55"/> {genericName}
            </h1> 
            { (noReviews === false) 
              && (averageOverallRating <= 2) 
              && <div className="my-3 w-75">
                <Alert severity="warning" color="error">This medication is red flagged for low reviews</Alert>
                </div>
            }
            { (noReviews === false) ?  
              <div className="my-3"> 
                <Rating size="large" name="read-only" precision={0.5} value={averageOverallRating} readOnly />
                <h6 className="show-whitespace"><strong> {averageOverallRating}</strong> out of 5</h6>
              </div> : <h6 className="my-3 lead">No Reviews Yet</h6> 
            }
            <strong>Brand Name(s):</strong> <span className="lead">{brandName}</span>
            <br/>
            <strong>Medicine Type:</strong> <span className="lead">{indication}</span>
            <br/>
            <br/>
            <strong>Description:</strong> <span className="lead">{description}</span>

            {/* if user is logged in, button triggers rendering of ReviewForm modal component 
            as pop up on page, otherwise, button redirects to LogIn.jsx */}
            <div className="med-page-review-form-container mb-5">
                { (currentUser !== null) ? <ReviewForm/> 
                  : <Button onClick={() => history.push('/log-in')} className="rounded-button mt-3 "> 
                      Write a Review
                    </Button>
                }
            </div>           
            
            <div className="reviews-container text-left">
              <ul className="list-unstyled">
                {reviewsArray !== [] && reviewsArray.map(review => <Reviews key={uuidv4()} review={ review } />)}
              </ul>
            </div>
          </div>

          <div>
            <Footer/>
          </div> 
      </div >
    )
}

export default MedPage;        
