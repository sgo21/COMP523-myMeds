
import React, { useRef } from 'react';
import Header from './Header.jsx'
import {db} from '../firebase'
import {Form, Button, Card} from "react-bootstrap";
import './SignUp.css';
 
export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
  return (
    <>
        <div>
            <Header/>
        </div>

        <Card className="SignUp text-left m-5 mx-auto border-0">
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group size="lg" id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder='User@email.com' type="email" ref={emailRef} required/> 
                    </Form.Group>
                    <Form.Group size="lg" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder='Password' type="password" ref={passwordRef} required/> 
                    </Form.Group>
                    <Form.Group size="lg" id="password">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control placeholder='Confirm password' type="password" ref={passwordConfirmRef} required/> 
                    </Form.Group>
                    <Button block size="lg" type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
            Already have an account? Log In
        </div>
    </>

  
  )
}
