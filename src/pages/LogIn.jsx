
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavbarContainer from '../components/NavbarContainer'
import Header from '../components/Header'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [alert, setAlert] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setAlert("")
      setLoading(true)
      await login(email, password)
      history.push("/my-profile")
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
      <Card className="sign-up text-left m-5 mx-auto border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          
          <p className="text-center"><hr/>Log into your MyMeds account to start posting reviews, view your profile, 
            and access other features such as requesting new medications to be included on MyMeds! <hr/ ></p>
          {alert && <Alert className="text-center" variant="danger">{alert}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                ref={emailRef} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                ref={passwordRef} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </Form.Group>
            
            <Button type="submit" disabled={loading} className="w-100 mt-3" style={{borderRadius:20}}>
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mb-4">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  )
}