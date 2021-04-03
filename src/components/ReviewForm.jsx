import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import {db} from '../firebase'
import '../css/Home.css';
import NavbarContainer from '../components/NavbarContainer'
import { useHistory } from "react-router-dom";
import '../css/MedPage.css';


export default function ReviewForm({medId}) {


    const history = useHistory();
    const [genericName, setGenericName] = useState("Generic Name");
    const [brandName, setBrandName] = useState("Brand Name");
    const [indication, setIndication] = useState("Med Type");
    const [idName, setidName] = useState("DocID Name");
    const [symtpom, setSymptom] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("")


    useEffect(() => {
      async function getData() {
        // You can await here
        const doc = await db.collection('drug').doc(medId).get();
        setGenericName(doc.data().genericName);
        setBrandName(doc.data().brandName);
        setIndication(doc.data().indication);
        setidName(doc.id);
      }
      getData();
    }, [medId]); 

    const handleSubmit =(e) => {
      e.preventDefault();
  
      db.collection('drug').doc(idName).collection("Review").add({
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
          <strong></strong> {genericName}
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