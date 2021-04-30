import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {db} from '../firebase'
import { Card, Button, Alert } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import ProfileReviews from '../components/ProfileReviews';
import PrivateRoute from "../components/PrivateRoute"
import Rating from '@material-ui/lab/Rating';


function ProfilePage ({ profileID }) {

  const history = useHistory();
  const [reviewsArray, setReviewsArray] = useState([]);
  const [noReviews, setNoReviews] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  

  useEffect(() => {
    async function getData() {
      // getting data for this page's medicine
      const doc = await db.collection('User').doc(profileID).get();
      setName(doc.data().name);
      setAge(doc.data().age);
      setRace(doc.data().race);
      setSex(doc.data().sex);


      // getting all the reviews for this page's medicine 
      const reviewsSnapshot = await db.collection("User").doc(profileID).collection("Review").get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, genericName: doc.data().genericName}]]
          );
        })
    }
    getData();
  }, [profileID]); 

    return (<div className="med-page-container">
        <div>
          <NavbarContainer/>
        </div>

        <div className="back-button outline-primary p-3">
          <Button onClick={e => {history.replace(`/`);}} className="my-3" variant="primary"> Back to Home</Button>
        </div>
           
        <div className="med-page-content text-left">
        <Card className="text-center my-3" border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {profileID}
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
            </Card.Body>
          </Card> 
            
            <div className="reviews-container text-left">
              <ul className="list-unstyled">
                {reviewsArray !== [] && reviewsArray.map(review => <ProfileReviews review={ review } />)}
              </ul>
            </div>

          </div>
        </div >)}

export default ProfilePage;