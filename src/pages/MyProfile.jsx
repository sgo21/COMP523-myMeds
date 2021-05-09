import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {db} from '../firebase'
import NavbarContainer from '../components/NavbarContainer'
import ProfileReviews from '../components/ProfileReviews';
import Footer from '../components/Footer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { v4 as uuidv4 } from 'uuid';

export default function MyProfile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [reviewsArray, setReviewsArray] = useState([]);

  useEffect(() => {
    //getting current logged in user's demographic data
    async function getUserData() {
      const userDoc = await db.collection('User').doc(currentUser.email).get();
      setName(userDoc.data().name);
      setAge(userDoc.data().age);
      setRace(userDoc.data().race);
      setSex(userDoc.data().sex);

    // getting all the reviews posted by current logged in user
    const reviewsSnapshot = await db.collection("User").doc(currentUser.email).collection("Review").get();
    setReviewsArray([]);
    reviewsSnapshot.forEach((doc) => {
      setReviewsArray(reviewsArray => 
        [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, genericName: doc.data().genericName, time: doc.data().createdAt, likeNumber: doc.data().likeNumber}]]
      );
    })
  }
    getUserData();
  }, [currentUser.email]);  

  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        <NavbarContainer/>
      </div>
      <Card className="my-profile text-left mt-5 mx-auto border-0" bg="light">
        <div className="text-center mt-3">
          <AccountCircleIcon style={{fontSize:'65px', color: '#79BBF9'}}/>
        </div>
        <Card.Body className="my-profile-content text-center">
          <h2 className="text-center mb-4">My Profile</h2>
          <hr/>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card.Text>
            <strong>Email:</strong> {currentUser.email}
          </Card.Text>
          <Card.Text>
            <strong>Name:</strong> {name}
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
        <h5 className="text-center mx-4 mb-4"><strong>My Reviews:</strong></h5> 
        {reviewsArray.length === 0 && <Card.Text className="text-center">No Reviews Yet!</Card.Text>}
        <ul>
          {reviewsArray !== [] && reviewsArray.map(review => <ProfileReviews key={uuidv4()} review={ review } />)}
        </ul>
      </Card>

      <div className="text-center m-3">
        <Link to="/update-profile" className="btn btn-primary" style={{borderRadius:20}}>
          Update Profile
        </Link>            
      </div>

      <div className="w-100 mb-3 mt-3 text-center">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <br/>
        <br/>
        <br/>
        <div>
          <Footer/>
        </div> 
      </div>
    </>
  )
}