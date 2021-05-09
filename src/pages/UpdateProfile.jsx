import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {db} from '../firebase'
import { Form, FormGroup, FormText, Input, Label, FormFeedback } from 'reactstrap'
import { Button, Card } from "react-bootstrap"
import '../css/Home.css';
import '../css/MedPage.css';
import NavbarContainer from '../components/NavbarContainer'
import { validateString, validateNumeric } from '../helpers/validation.jsx';

export default function UpdateProfile() {
    const { currentUser } = useAuth()
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [race, setRace] = useState("");
    const [sex, setSex] = useState("")
    
    const history = useHistory()
    
    useEffect(() => {
      // getting the current logged in user's data from the database
      async function getUserData() {
        const userDoc = await db.collection('User').doc(currentUser.email).get();
        setName(userDoc.data().name);
        setAge(userDoc.data().age);
        setRace(userDoc.data().race);
        setSex(userDoc.data().sex);
      }
        getUserData();
    }, [currentUser.email]);  
  
    const handleSubmit =(e) => {
      e.preventDefault();
      // replacing the user's data in the database with the values from the form
      db.collection('User').doc(currentUser.email).set({
        name:name,
        sex:sex,
        race:race,
        age:age,
      })
      .then(() => {
        history.replace("/my-profile")
      })
      .catch(error => {
      })
    };
     
    return (
      <div>
        <div>
          <NavbarContainer/>
        </div>
        <Card className="review text-left m-5 mx-auto border-0" bg="light">
          <Card.Body>
            <h2 className="text-center mb-4">Update My Profile</h2>

            <Form data-testid="update-profile-form" onSubmit={handleSubmit}>
              <FormGroup id="Name">
                <Label>Name</Label>
                <Input 
                  placeholder={name}
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
                <FormText>E.g. your full name, or feel free to use just your first name, nickname, pseudonym, etc.</FormText>          
              </FormGroup>

              <FormGroup id="Age">
                <Label>Age</Label>
                <Input
                  placeholder={age}
                  value={age} 
                  onChange={(e) => setAge(e.target.value)}                    
                  valid={validateNumeric(age)}
                  invalid={age.length > 0 && !validateNumeric(age)}
                />
                <FormFeedback>
                    Age must be a numeric value
                </FormFeedback>
              </FormGroup>

              <FormGroup id="Race">
                <Label>Race</Label>
                <Input
                  placeholder={race}
                  value={race} 
                  onChange={(e) => setRace(e.target.value)}
                  valid={validateString(race)}
                  invalid={race.length > 0 && !validateString(race)}
                />
              </FormGroup>


              <FormGroup id="Sex">
                    <Label>Sex</Label>
                    <Input type="select" onChange={e => setSex(e.target.value)}>
                      <option key='defaultView' value='' hidden>{sex}</option>
                      <option value='Female'>Female</option>
                      <option value='Male'>Male</option>
                      <option value='Other'>Other</option>
                    </Input>
                </FormGroup>

              <Button 
                data-testid="button"
                type="submit"
                disabled={(age.length > 0 && !validateNumeric(age)) || (race.length > 0 && !validateString(race))} 
                className="w-100 mt-3" 
                style={{borderRadius:20}}
              >
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }