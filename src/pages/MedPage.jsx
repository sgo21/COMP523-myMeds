import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {db} from '../firebase'
import { Button } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import ReviewForm from 'components/ReviewForm';
import Reviews from '../components/Reviews';
import PrivateRoute from "../components/PrivateRoute"
import '../css/Home.css';
import '../css/MedPage.css';
import Rating from '@material-ui/lab/Rating';


function MedPage ({ medId }) {

  const history = useHistory();
  const [genericName, setGenericName] = useState("Generic Name");
  const [brandName, setBrandName] = useState("Brand Name");
  const [indication, setIndication] = useState("Med Type");
  const [reviewsArray, setReviewsArray] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [averageOverallRating, setAverageOverallRating] = useState(0);
  const [indexRating, setindexRating] = useState(0);
  const [noReviews, setNoReviews] = useState(true);
  const [loaded, setLoaded] = useState(false);
  
  function onLoad() {
    console.log('loaded');
    setLoaded(true);
  }

  const onClick = () => {
    if (showReviewForm) {
      setShowReviewForm(false);
    } else { 
      setShowReviewForm(true)
    }
  }

  useEffect(() => {
    async function getData() {
      // getting data for this page's medicine
      const doc = await db.collection('drug').doc(medId).get();
      setGenericName(doc.data().genericName);
      setBrandName(doc.data().brandName);
      setIndication(doc.data().indication);

      // getting all the reviews for this page's medicine 
      const reviewsSnapshot = await db.collection("drug").doc(medId).collection("Review").get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, time: doc.data().createdAt, likeNumber: doc.data().likeNumber, likeUsers: doc.data().likeUsers}]]
          );
        })

        console.log(reviewsArray);

      // calculate average rating
      let total = 0;
      let index = 0;
      reviewsSnapshot.forEach((doc) => {
        total = total + doc.data().rating;
        index = index + 1;
        setindexRating(index);
      })
      if(index === 0){
        setNoReviews(true);
      }else{
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

  // helper function to round ratings to nearest tenths place
  function roundTenths(num, place) {
    if( !place) place = 0;
    let pow = Math.pow(10,place);
    return Math.round(num*pow)/pow;
}

  // // helper functions to standardize text caseing
  async function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
  }
  async function titleCase(str) {
    return str.replace(/[^\ \/\-\_]+/g, capitalize);
  }

    return (<div className="med-page-container">
        <div>
          <NavbarContainer/>
        </div>

        <div className="back-button outline-primary p-3">
          <Button onClick={e => {history.replace(`/`);}} className="my-3" variant="primary"> Back to Home</Button>
        </div>
           
        <div className="med-page-content text-left">
            <h1>{genericName}</h1> 
            {noReviews === false && 
              <div> 
                <Rating size="large" name="read-only" precision={0.5} value={averageOverallRating} readOnly />
                <h6 className="show-whitespace"><strong> {averageOverallRating}</strong> out of 5</h6>
            </div>}
            {noReviews === true && <h6>No Reviews</h6>}
            <br></br>
            <strong>Brand Names:</strong> {brandName}
            <br></br>
            <strong>Medicine Type:</strong> {indication}
            <br></br>

            <div className="med-page-review-form-container mb-5">
              <Button onClick={onClick} className="mt-3"> Write a Review </Button>
              { showReviewForm ? <PrivateRoute component={ReviewForm}></PrivateRoute> : null }
            </div>
            
            <div className="reviews-container text-left">
              <ul className="list-unstyled">
                {reviewsArray !== [] && reviewsArray.map(review => <Reviews review={ review } />)}
              </ul>
            </div>

          </div>
        </div >)}

export default MedPage;        
