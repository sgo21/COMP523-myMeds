import React, {} from 'react';
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';


function MedCard ({ med }) {
    
    const medId = med.medId;
    const genericName = med.genericName;
    const brandName = med.brandName;
    const indication = med.indication;
    const rating = med.rating;
    const reviewsAmt = med.reviewsAmt;

    const history = useHistory();

    // const routeChange = () =>{ 
    //   console.log(medId + " button clicked")
    //   let path = "/med/"+ medId; 
    //   history.push(path);
    // }

    return (<div data-testid='medcard'>
          <Card bg="light" className="text-center my-3" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              {(reviewsAmt > 0) && (rating <= 2) && <Alert severity="warning" color="error">This medication is red flagged for low reviews</Alert>}
              <Card.Title data-testid='title' className="mt-3"><strong>{genericName}</strong></Card.Title>
              <Card.Text className="med-card-rating-display" style={{ fontSize: '15px' }}>
                <Rating data-testid='rating' name="read-only" precision={0.5} value={rating} readOnly />
                <br/>
                Based on {reviewsAmt} reviews
              </Card.Text>
              <hr/>
              <Card.Text data-testid='brandname'>
                <strong>Brand Names:</strong> {brandName}
              </Card.Text>
              <Card.Text data-testid='medicinetype'>
                <strong>Medicine Type:</strong> {indication}
              </Card.Text>
              <Button data-testid='button' onClick={e => { history.push("home/med/"+ medId); }} variant="primary">View Reviews & More Info</Button>
            </Card.Body>
          </Card> 
        </div>)}

export default MedCard;