import React, {} from 'react';
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom";


function MedCard ({ med }) {
  
    const genericName = med.genericName;
    const brandName = med.brandName;
    const indication = med.indication;
    const medId = med.medId;

    const history = useHistory();

    const routeChange = () =>{ 
      console.log(medId + " button clicked")
      let path = "/"+ medId; 
      history.push(path);
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
              <Button onClick={routeChange} variant="primary">View Reviews & More Info</Button>
            </Card.Body>
          </Card> 
        </div>)}

export default MedCard;        
