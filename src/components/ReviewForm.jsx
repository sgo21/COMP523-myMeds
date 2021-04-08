import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import {db} from '../firebase'
import '../css/Home.css';
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import '../css/MedPage.css';


export default function ReviewForm({medId}) {
  const [error, setError] = useState("")
  const { currentUser } = useAuth()
  const history = useHistory()

    const [name, setName] = useState("Generic Name");
    const [idName, setidName] = useState("DocID Name");
    const [race, setRace] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [symtpom, setSymptom] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");


    
    const getData2 = async () => {
      // You can await here
      const doc2 = await db.collection('User').doc(currentUser.email).get();
      setName(doc2.data().name);
      setRace(doc2.data().race);
      setSex(doc2.data().sex);
      setAge(doc2.data().age);
      }
      getData2(); 

      useEffect(() => {
        async function getData() {
          // You can await here
          const doc = await db.collection('drug').doc(medId).get();
          setidName(doc.id);
        }
        getData();
      }, [medId]); 

    const handleSubmit =(e) => {
       e.preventDefault();
<<<<<<< HEAD
  
      db.collection('drug').doc(idName).collection("Review").add({
        name:name,
        age:age,
        sex:sex,
        race:race,
        symtpom:symtpom,
        review:review,
        rating:rating,
=======
      
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
>>>>>>> parent of 1ed8964 (Final for 4/5)
      })
      .then(() => {
        alert('Got It(');
        console.log(name, age, sex, race, symtpom, race, review, rating, idName)
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
        
            <Form.Group id="Rating">
                <Form.Control
                placeholder='Select your rating'
                value={rating} 
                onChange={(e) => setRating(e.target.value)}/>
            </Form.Group>

            <Button className="w-100" type="submit">
              Post Review
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}