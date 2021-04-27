import React, { useRef, useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import {Form, FormGroup, FormText, Input, Label, FormFeedback, Row, Col } from 'reactstrap'
import { useAuth } from "../contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import '../css/SignUp.css';
import NavbarContainer from '../components/NavbarContainer'
import {db} from '../firebase'
import { validateString, validateNumeric, validatePassword,validateEmail,validatePasswordFeedback } from '../helpers/validation.jsx';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const sexRef = useRef()
  
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signup(email, password)
      db.collection('User').doc(email).set({
        email:email,
        name:name,
        race:race,
        sex:sex,
        age:age,
      })
      history.replace("/")
    } catch {
      setError("Failed to Create an Account")
    }
    setLoading(false)
  }

  return (
    <>
      <div>
        <NavbarContainer/>
      </div>
      <Card className="sign-up text-left mt-5 mx-auto border-0" bg="light">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          <hr/>
          <p className="text-center">Create a MyMeds account to start posting reviews, view your profile, 
            and access other features such as requesting new medications to be included on MyMeds!</p>
          <hr/>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <FormGroup id="Name">
              <Label>Name</Label>
              <Input
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              <FormText>E.g. your full name, or feel free to use just your first name, nickname, pseudonym, etc.</FormText>          
            </FormGroup>

            <Row form>
              <Col> 
                <FormGroup id="Age">
                  <Label>Age</Label>
                  <Input
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                    valid={validateNumeric(age)}
                    invalid={age.length > 0 && !validateNumeric(age)}/>
                  <FormFeedback>
                      Age must be a numeric value
                  </FormFeedback>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup id="Race">
                  <Label>Race</Label>
                  <Input
                    value={race} 
                    onChange={(e) => setRace(e.target.value)}
                    valid={validateString(race)}
                    invalid={race.length > 0 && !validateString(race)}/>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup id="Sex">
                    <Label>Sex</Label>
                    <Input type="select" ref={sexRef} onChange ={e => setSex(e.target.value)}>
                      <option key='defaultView' value='' hidden></option>
                      <option value='Female'>Female</option>
                      <option value='Male'>Male</option>
                      <option value='Other'>Other</option>
                    </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup id="email">
              <Label>Email</Label>
              <Input 
                placeholder="youremail@domain.com" 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef} 
                valid={validateEmail(email)}
                invalid={email.length > 0 && !validateEmail(email)}
                required 
              />
              <FormFeedback>
                Email is invalid
              </FormFeedback>
            </FormGroup>

            <Row form>
              <Col>
                <FormGroup id="password">
                  <Label>Password</Label>
                  <Input 
                    type="password" 
                    ref={passwordRef} 
                    onChange={(e) => setPassword(e.target.value)}
                    valid={validatePassword(password)}
                    invalid={password.length > 0 && !validatePassword(password)}
                    required 
                  />
                  <FormFeedback>
                    {validatePasswordFeedback(password)}
                  </FormFeedback>                  
                </FormGroup>
              </Col>

              <Col>
                <FormGroup id="password-confirm">
                  <Label>Confirm Password</Label>
                  <Input 
                    type="password" 
                    ref={passwordConfirmRef} 
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    valid={(password === passwordConfirm) && validatePassword(passwordConfirm)}
                    invalid={(passwordConfirm.length > 0) && (!(password === passwordConfirm) || !validatePassword(passwordConfirm))}
                    required  
                  />
                  <FormFeedback>
                    Passwords do not match
                  </FormFeedback>   
                </FormGroup>
              </Col>
            </Row>

            <Button 
              type="submit"
              disabled={loading 
                || (age.length > 0 && !validateNumeric(age)) 
                || (race.length > 0 && !validateString(race))
                || (email.length > 0 && !validateEmail(email))
                || (password.length > 0 && !validatePassword(password))
                || ((passwordConfirm.length > 0) && (!(password === passwordConfirm) || !validatePassword(passwordConfirm)))
              } 
              className="w-100 mt-3" 
              style={{borderRadius:20}}
            >
              Sign Up
            </Button>
          </Form>
          <div className="text-center m-4">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}