import React, {useState} from 'react';

import '../css/Header.css';
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom";

function MedCard ({ med }) {
  
    const [error, setError] = useState("")
    const genericName = med.genericName;
    const brandName = med.brandName;
    const indication = med.indication;
    const medId = med.medId;

    const history = useHistory();

    const routeChange = () =>{ 
      console.log(medId + " button clicked")
      let path = "home/"+ medId; 
      history.push(path);
    }

    async function handleReview() {
      // setError("")
  
      // try {
      //   await logout()
      //   history.push("/")
      // } catch {
      //   setError("Failed to log out")
      // }
    }

    return (<div>
          <Card className="text-center my-3" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{genericName}</Card.Title>
              <Card.Text>
                <strong>Brand Names:</strong> {brandName}
              </Card.Text>
              <Card.Text>
                <strong>Medicine Type:</strong> {indication}
              </Card.Text>
              <Button variant="link" onClick={handleReview}>View Reviews & More Info</Button>
            </Card.Body>
          </Card> 
        </div>)}

export default MedCard;        
