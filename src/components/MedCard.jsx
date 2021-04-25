import React, {} from 'react';
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import '../css/MedCard.css';


function MedCard ({ med }) {
    
    const medId = med.medId;
    const genericName = med.genericName;
    const brandName = med.brandName;
    const indication = med.indication;
    const rating = med.rating;
    const reviewsAmt = med.reviewsAmt;

    const history = useHistory();

    const routeChange = () =>{ 
      console.log(medId + " button clicked")
      let path = "home/med/"+ medId; 
      history.push(path);
    }

    return (<div>
          <Card bg="light" className="text-center my-3" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><strong>{genericName}</strong></Card.Title>
              <Card.Text className="med-card-rating-display">
                <Rating name="read-only" precision={0.5} value={rating} readOnly />
                <br/>
                Based on {reviewsAmt} reviews
              </Card.Text>
              <hr/>
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
