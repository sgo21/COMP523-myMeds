import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import {db, timeNow} from '../firebase'
import { Form, Button, Card } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { roundTenths } from '../helpers/rounding.jsx';

export default function ReviewForm() {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [symptom, setSymptom] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [genericName, setGenericName] = useState("");
  const [indexRating, setindexRating] = useState(0);
  const [averageOverallRating, setAverageOverallRating] = useState(0);

  const location = window.location.href.split("/");
  const medId = location[location.length - 1]
  
  useEffect(() => {
    async function getUserData() {
      const userDoc = await db.collection('User').doc(currentUser.email).get();
      setName(userDoc.data().name);
      setRace(userDoc.data().race);
      setSex(userDoc.data().sex);
      setAge(userDoc.data().age);

      const medDoc = await db.collection('drug').doc(medId).get();
      setGenericName(medDoc.data().genericName);
    }
      getUserData();
  }, [currentUser.email, medId]); 

  
  const handleSubmit=(e) => {
    e.preventDefault();
      
    const location = window.location.href.split("/");
    const medId = location[location.length - 1]

    //doc(currentUser.email).set
    db.collection('drug').doc(medId).collection("Review").add({
      name: name,
      age: age,
      sex: sex,
      race: race,
      symptom: symptom,
      review: review,
      rating: rating,
      createdAt: timeNow,
      likeUsers: [],
      likeNumber: 0,
    })
    db.collection('User').doc(currentUser.email).collection("Review").add({
      name: name,
      age: age,
      sex: sex,
      race: race,
      symptom: symptom,
      review: review,
      rating: rating,
      genericName: genericName,
      createdAt: timeNow,
      likeUsers: [],
      likeNumber: 0,
    })
    .then(() => {
      // re-calculating the average rating for this page's medicine after new rating has been added
      async function updateAverageRating() {
        let total = 0;
        let index = 0;
        const reviewsSnapshot = await db.collection("drug").doc(medId).collection("Review").get();
        reviewsSnapshot.forEach((doc) => {
          total = total + doc.data().rating;
          index = index + 1;
          setindexRating(index);
        })

        if(index !== 0){
          let ratingAverage = total/index;
          ratingAverage = roundTenths(ratingAverage, 2);
          setAverageOverallRating(ratingAverage)
        }
      }
      updateAverageRating();

      // pushing the updated average rating to the database
      db.collection("drug").doc(medId).set({
        rating:averageOverallRating,
        reviews:indexRating,
      }, 
      {merge: true})
    })
    .catch(error => {
      alert(error.mesage);
    })
  };
    
  return (
    <div>
      <Card className="review text-left m-5 mx-auto border-0" bg="light">
        <Card.Body>
          <h2 className="text-center mb-4">Review</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="Symptom">
              <Form.Label>What symptom(s) were you treating?</Form.Label>
              <Form.Control 
                value={symptom} 
                onChange={(e) => setSymptom(e.target.value)}/>
            </Form.Group>

            <Form.Group id="Review">
                <Form.Label>Review:</Form.Label>
                <Form.Control
                as = "textarea"
                rows = {3} 
                placeholder='Write your review...'
                value={review} 
                onChange={(e) => setReview(e.target.value)}/>
            </Form.Group>
        
            {/* <Form.Group id="Rating">
                <Form.Control
                placeholder='Select your rating'
                value={rating} 
                onChange={(e) => setRating(e.target.value)}/>
            </Form.Group> */}

            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating:</Typography>
               <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newRating) => {setRating(newRating);}}
              />
            </Box>

            <Button type="submit" className="w-100" style={{borderRadius:20}} disabled = {(review.length <= 0) || (symptom.length <= 0) || (rating == undefined)}>
              Post Review
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}