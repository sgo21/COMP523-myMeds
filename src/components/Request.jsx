import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import {db, timeNow} from '../firebase'
import { Form, Button, Card } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';

export default function RequestForm() {
    const { currentUser } = useAuth()
  
    const [name, setName] = useState("");
    const [drug, setDrug] = useState("");
    const [brandName, setbrandName] = useState("");
    const [indication, setIndication] = useState("");
    const [medicationClass, setMedicationClass] = useState("");
    const [dea, setDea] = useState(0);
  
  
    useEffect(() => {
      async function getUserData() {
        // You can await here
        const userDoc = await db.collection('User').doc(currentUser.email).get();
        setName(userDoc.data().name);
      }
        getUserData();
    }, []);  
  
      const handleSubmit =(e) => {
         e.preventDefault();
  
        //doc(currentUser.email).set
        db.collection('Requests').add({
          name: name,
          createdAt: timeNow,
          genericName: drug,
          brandName: brandName,
          indication: indication,
          medicationClass: medicationClass,
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
        <Card className="review text-left m-5 mx-auto border-0">
          <Card.Body>
            <h2 className="text-center mb-4">Request</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="Drug">
                <Form.Control 
                  placeholder='What Drug do you want to add?'
                  value={drug} 
                  onChange={(e) => setDrug(e.target.value)}/>
              </Form.Group>
              <Form.Group id="brandName">
                  <Form.Control
                  placeholder='What is the Brand Name for the Durg?'
                  value={brandName} 
                  onChange={(e) => setbrandName(e.target.value)}/>
              </Form.Group>
              <Form.Group id="indication">
                  <Form.Control
                  placeholder='What Symptom does this drug treat?'
                  value={indication} 
                  onChange={(e) => setIndication(e.target.value)}/>
              </Form.Group>
              <Form.Group id="indication">
                  <Form.Control
                  placeholder='What is the medication class of the drug?'
                  value={medicationClass} 
                  onChange={(e) => setMedicationClass(e.target.value)}/>
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