import React, { useState, useEffect } from "react"
import { Card, Button, Alert, Row, Col } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../css/MyProfile.css';
import {db} from '../firebase'
import NavbarContainer from '../components/NavbarContainer'
import ProfileReviews from '../components/ProfileReviews';

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
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, genericName: doc.data().genericName}]]
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
      <Card className="my-profile text-left mt-5 mb-4 mx-auto border-0">
        <Card.Body className="my-profile-content">
          <h2 className="text-center mb-4">My Profile</h2>
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
      </Card>
      <h6 className="text-center mb-4"><strong>My Reviews:</strong></h6> 
      <Row className="reviews-container justify-content-center text-left">
        {reviewsArray.length === 0 && "No reviews yet!"}
        <Col md={{offset: 4}}>
          <ul>
            {reviewsArray !== [] && reviewsArray.map(review => <ProfileReviews review={ review } />)}
          </ul>
        </Col>
      </Row>

      <div className="text-center" >
        <Link to="/update-profile" className="btn btn-primary w-50" style={{borderRadius:20}}>
          Update Profile
        </Link>            
      </div>

      <div className="w-100 mb-3 mt-3 text-center">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}