import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {db} from '../firebase'
import { Button } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import ReviewForm from 'components/ReviewForm';
import PrivateRoute from "../components/PrivateRoute"
import '../css/Home.css';
import '../css/MedPage.css';
import { v4 as uuidv4 } from 'uuid';


function MedPage ({ medId }) {

  const history = useHistory();
  const [genericName, setGenericName] = useState("Generic Name");
  const [brandName, setBrandName] = useState("Brand Name");
  const [indication, setIndication] = useState("Med Type");
  const [reviewsArray, setReviewsArray] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false)
  
  const onClick = () => {
    if (showReviewForm) {
      setShowReviewForm(false);
    } else { 
      setShowReviewForm(true)
    }
  }

  useEffect(() => {
    async function getData() {
      // You can await here
      const doc = await db.collection('drug').doc(medId).get();
      setGenericName(doc.data().genericName);
      setBrandName(doc.data().brandName);
      setIndication(doc.data().indication);


      const reviewsSnapshot = await db.collection("drug").doc(medId).collection("Review").get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom}]]
          );
        })
    }
    getData();
  }, [medId]); 

    // functions to standardize query's caseing
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
    }

    function titleCase(str) {
      return str.replace(/[^\ \/\-\_]+/g, capitalize);
    }

    return (<div className="med-page-container">
        <div>
          <NavbarContainer/>
        </div>

        <div className="back-button outline-primary p-3">
          <Button onClick={e => {history.replace(`/`);}} className="my-3" variant="primary"> Back to Home</Button>
        </div>
           
        <div className="med-page-content text-center">
            <h1>{titleCase(genericName)}</h1> 
            <br></br>
            <strong>Brand Names:</strong> {brandName}
            <br></br>
            <strong>Medicine Type:</strong> {indication}
            <br></br>
            <div className="med-page-review-form-container">
              <Button onClick={onClick} className="mt-3"> Write a Review </Button>
              { showReviewForm ? <PrivateRoute component={ReviewForm}></PrivateRoute> : null }
            </div>
            <div className="align-items-center">
              {reviewsArray !== [] && reviewsArray.map(med => <p>{med.user}<br></br>{med.review}</p>)}
            </div>

          </div>
        </div >)}

export default MedPage;        
