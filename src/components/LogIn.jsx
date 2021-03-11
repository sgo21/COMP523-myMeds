
import React, { useState } from 'react';
import Header from './Header.jsx'
import {db} from '../firebase'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './LogIn.css';

const LogIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();

    db.collection('user').add({
      name:username,
      name:password,
    })
    .then(() => {
      alert('Got It');
    })
    .catch(error => {
      alert(error.mesage);
    })

  };


  return (
  <div className="Home">
    <div>
        <Header/>
    </div>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
          placeholder='Username'
          value={username} 
          onChange={(e) => setUsername(e.target.value)}/> 
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          placeholder='Password'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button block size="lg" type='submit'>Submit</Button>
      </form>
    </div>
    </div>

  
  )
}
export default LogIn;