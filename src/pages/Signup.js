import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import '../css/SignUp.css';
import NavbarContainer from '../components/NavbarContainer'
import Header from '../components/Header'
import {db} from '../firebase'

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

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      db.collection('User').doc(emailRef.current.value).set({
        email:emailRef.current.value,
        name:name,
        race:race,
        sex:sexRef.current.value,
        age:age,
      })
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <NavbarContainer/>
      </div>
      <Card className="sign-up text-left m-5 mx-auto border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder='Enter Name (Ex: John Smith)'
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Row>
            <Form.Group id="Race">
              <Form.Label>Race</Form.Label>
              <Form.Control
                placeholder='Enter Race '
                value={race} 
                onChange={(e) => setRace(e.target.value)}/>
            </Form.Group>

              {/* <Form.Group id="Sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control
                  placeholder='Enter Sex '
                  value={sex} 
                  onChange={(e) => setSex(e.target.value)}/>
              </Form.Group> */}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Sex</Form.Label>
                <Form.Control as="select" ref={sexRef}>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </Form.Control>
            </Form.Group>
                  
              <Form.Group id="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder='Enter Age '
                  value={age} 
                  onChange={(e) => setAge(e.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Row>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
            </Form.Row>
            {/* <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Sex</Form.Label>
              <Form.Control as="select"
                placeholder='Enter Sex '
                value={sex} 
                onChange={(e) => setSex(e.target.value)}>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group> */}



            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}