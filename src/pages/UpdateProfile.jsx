import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext"
import {db} from '../firebase'
import { Form, Button, Card } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';
import NavbarContainer from '../components/NavbarContainer'

export default function RequestForm() {
    const { currentUser } = useAuth()
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const sexRef = useRef();
    const [age, setAge] = useState("");


    useEffect(() => {
      async function getUserData() {
        // You can await here
        const userDoc = await db.collection('User').doc(currentUser.email).get();
        setName(userDoc.data().name);
        setRace(userDoc.data().race);
        setAge(userDoc.data().age);
      }
        getUserData();
    }, []);  
  
      const handleSubmit =(e) => {
         e.preventDefault();
  
        //doc(currentUser.email).set
        db.collection('User').doc(currentUser.email).set({
          name: name,
          sex:sexRef.current.value,
          race: race,
          age: age,
        })
        .then(() => {
          alert('Got It(');
          //console.log(name, age, sex, race, symtpom, race, review, rating, ids);
        })
        .catch(error => {
          alert(error.mesage);
        })
      };
      
    return (
      <div>
        <div>
          <NavbarContainer/>
        </div>
        <Card className="review text-left m-5 mx-auto border-0">
          <Card.Body>
            <h2 className="text-center mb-4">Request</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  placeholder={name}
                  value={name} 
                  onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Sex</Form.Label>
                <Form.Control as="select" ref={sexRef}>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group id="Race">
                <Form.Label>Race</Form.Label>
                <Form.Control
                  placeholder={race}
                  value={race} 
                  onChange={(e) => setRace(e.target.value)}/>
              </Form.Group>
              <Form.Group id="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder={age}
                  value={age} 
                  onChange={(e) => setAge(e.target.value)}/>
              </Form.Group>
              <Button className="w-100" type="submit">
                Send Request
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }