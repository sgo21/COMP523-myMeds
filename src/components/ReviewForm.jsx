import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import {db} from '../firebase'
import '../css/Home.css';
import NavbarContainer from '../components/NavbarContainer'
import MedCard from '../components/MedCard'
import { v4 as uuidv4 } from 'uuid';
import Home from '../pages/Home'


export default function ReviewForm() {

    const [symtpom, setSymptom] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("")

    const handleSubmit =(e) => {
      e.preventDefault();
  
      db.collection('user').add({
        symtpom:symtpom,
        review:review,
        rating:rating,
      })
      .then(() => {
        alert('Got It(');
        console.log()
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
              <input 
                placeholder='Enter Symptom'
                value={symtpom} 
                onChange={(e) => setSymptom(e.target.value)}/>
            </Form.Group>
            <Form.Group id="Review">
                <input 
                placeholder='Enter Symptom'
                value={review} 
                onChange={(e) => setReview(e.target.value)}/>
            </Form.Group>
        
            <Form.Group id="Rating">
                <input 
                placeholder='Enter Rating '
                value={rating} 
                onChange={(e) => setRating(e.target.value)}/>
            </Form.Group>

            <Button className="w-100" type="submit">
              Enter
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
