import React, {} from 'react';
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom";


function ProfileCard ({ profile }) {
  
    const fullname = profile.name;
    const race = profile.race; 
    const sex = profile.sex;
    const age = profile.age;
    const email = profile.email;

    // necessary for future implementation of:
    // redirect to certain profiles / add to saved users
    const history = useHistory();

    const routeChange = () =>{ 
      console.log(email + " button clicked")
      let path = "home/"+ email; 
      history.push(path);
    }

    return (<div>
          <Card className="text-center my-3" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{fullname}</Card.Title>
              <Card.Text>
                <strong>Profile Name:</strong> {fullname}
              </Card.Text>
              <Card.Text>
                <strong>Age:</strong> {age}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {sex}
              </Card.Text>
              <Card.Text>
                <strong>Ethnicity:</strong> {race}
              </Card.Text>
              <Button onClick={routeChange} variant="primary">View Profile</Button>
            </Card.Body>
          </Card> 
        </div>)}

export default ProfileCard;      