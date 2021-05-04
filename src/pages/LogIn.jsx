import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavbarContainer from '../components/NavbarContainer'
import Footer from '../components/Footer'

export default function Login() {
  const [alert, setAlert] = useState("")
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setAlert("")
      setLoading(true)
      await login(email, password)
      history.goBack()
    } catch {
      setAlert("Invalid email or password")
    }
    setLoading(false)
  }

  return (
    <>
      <div>
        <NavbarContainer/>
      </div> 
      <Card data-testid='login' className="sign-up text-left mt-5 mx-auto border-0" bg="light"> 
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>

          <hr/>
          <p data-testid="login-help-text" className="text-center">
            Log into your MyMeds account to start posting reviews, view your profile, 
            and access other features such as requesting new medications to be included on MyMeds!
          </p>
          <hr/>

          {alert && <Alert className="text-center" variant="danger">{alert}</Alert>}
          
          <Form data-testid="login-form" onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                ref={emailRef} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                ref={passwordRef} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </Form.Group>
            
            <Button data-testid="button" type="submit" disabled={loading} className="w-100 mt-3" style={{borderRadius:20}}>
              Log In
            </Button>
          </Form>
          
        </Card.Body>
      </Card>

      <div className="w-100 text-center m-4">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>

      <div>
        <Footer/>
      </div> 
    </>
  )
}