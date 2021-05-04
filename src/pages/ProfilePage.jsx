import React, { useState, useEffect } from 'react';
import {db} from '../firebase'
import { Card } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import ProfileReviews from '../components/ProfileReviews';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Footer from "../components/Footer"
import { v4 as uuidv4 } from 'uuid';

/* ProfilePage component takes in a string "profileId" as a prop and renders the page containing the 
 information and reviews for the user corresponding to that "profileId" */ 

function ProfilePage ({ profileId }) {

  const [reviewsArray, setReviewsArray] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    async function getData() {
      // getting data for this user's profile
      const doc = await db.collection('User').doc(profileId).get();
      setName(doc.data().name);
      setAge(doc.data().age);
      setRace(doc.data().race);
      setSex(doc.data().sex);

      // getting all the reviews for this user's profile
      const reviewsSnapshot = await db.collection("User").doc(profileId).collection("Review").get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, genericName: doc.data().genericName, time: doc.data().createdAt, likeNumber: doc.data().likeNumber}]]
          );
        })
    }; 
    getData();
  }, [profileId]); 
    
    return (<>
      <div data-testid="nav">
        <NavbarContainer/>
      </div>

      <Card className="my-profile text-left mt-5 mx-auto border-0" bg="light">
        <div className="text-center mt-3">
          <AccountCircleIcon style={{fontSize:'65px', color: '#79BBF9'}}/>
        </div>
        <Card.Body className="my-profile-content text-center">
          <h2 className="text-center mb-4">{name}</h2>
          <hr/>
          <Card.Text>
            <strong>Email:</strong> {profileId}
          </Card.Text>
          <Card.Text>
            <strong>Age:</strong> {age}
          </Card.Text>
          <Card.Text>
            <strong>Race:</strong> {race}
          </Card.Text>
          <Card.Text>
            <strong>Sex:</strong> {sex}
          </Card.Text> 
        </Card.Body>
        <hr/>
        <h5 className="text-center mx-4 mb-4"><strong>{name}'s Reviews:</strong></h5> 
        {reviewsArray.length === 0 && <Card.Text className="text-center">No Reviews Yet!</Card.Text>}
        <ul>
          {reviewsArray !== [] && reviewsArray.map(review => <ProfileReviews key={uuidv4()} review={ review } />)}
        </ul>
      </Card>
      <div>
        <Footer/>
      </div>
    </>
  )}

export default ProfilePage;