import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import {db} from '../firebase'
import { Form, Button, Card } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function ReviewForm() {
  const { currentUser } = useAuth()

  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [symtpom, setSymptom] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");


  useEffect(() => {
    async function getUserData() {
      // You can await here
      const userDoc = await db.collection('User').doc(currentUser.email).get();
      setName(userDoc.data().name);
      setRace(userDoc.data().race);
      setSex(userDoc.data().sex);
      setAge(userDoc.data().age);
    }
      getUserData();
  }, []);  

    const handleSubmit =(e) => {
       e.preventDefault();
      
      const location = window.location.href.split("/");
      const ids = location[location.length - 1]

      
      db.collection('drug').doc(ids).collection("Review").doc(currentUser.email).set({
        name: name,
        age: age,
        sex: sex,
        race: race,
        symtpom: symtpom,
        review: review,
        rating: rating,
      })
      .then(() => {
        alert('Got It(');
        console.log(name, age, sex, race, symtpom, race, review, rating, ids);
      })
      .catch(error => {
        alert(error.mesage);
      })
    };
    
  return (
    <div>
      <Card className="review text-left m-5 mx-auto border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Symptom">
              <Form.Control 
                placeholder='What symptom(s) were you treating?'
                value={symtpom} 
                onChange={(e) => setSymptom(e.target.value)}/>
            </Form.Group>
            <Form.Group id="Review">
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
              <Typography component="legend">Rating</Typography>
               <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }}
              />
            </Box>

            <Button className="w-100" type="submit">
              Post Review
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}