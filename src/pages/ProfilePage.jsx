import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {db} from '../firebase'
import { Card, Button, Alert } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import ProfileReviews from '../components/ProfileReviews';
import PrivateRoute from "../components/PrivateRoute"
import Rating from '@material-ui/lab/Rating';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from "../contexts/AuthContext"


function ProfilePage ({ profileID }) {

  const history = useHistory();
  const [reviewsArray, setReviewsArray] = useState([]);
  const [noReviews, setNoReviews] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const {currentUser} = useAuth();
  const [currentAge, setCurrentAge] = useState(0);
  const [currentSex, setCurrentSex] = useState("");
  const [currentRace, setCurrentRace] = useState("");
  const [percentMatch, setPercentMatch] = useState(0);

  // useEffect(() => {
  //   async function getData() {
  //     // getting data for this page's medicine
  //     const doc = await db.collection('User').doc(currentUser.email).get();
  //     setCurrentAge(doc.data().age);
  //     setCurrentRace(doc.data().race);
  //     setCurrentSex(doc.data().sex);
  //   }
  //   getData();
  // }, [profileID]); 

  useEffect(() => {
    async function getData() {
      // getting data for this user's profile
      const doc = await db.collection('User').doc(profileID).get();
      setName(doc.data().name);
      setAge(doc.data().age);
      setRace(doc.data().race);
      setSex(doc.data().sex);

      // getting all the reviews for this user's profile
      const reviewsSnapshot = await db.collection("User").doc(profileID).collection("Review").get();
      setReviewsArray([]);
      reviewsSnapshot.forEach((doc) => {
          setReviewsArray(reviewsArray => 
            [...reviewsArray, ...[{user: doc.id, rating: doc.data().rating, review: doc.data().review, symptom: doc.data().symptom, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex, genericName: doc.data().genericName, time: doc.data().createdAt, likeNumber: doc.data().likeNumber,}]]
          );
        })

    // getting data for this current user's demographics for percent matching
      const currentUserDoc = await db.collection('User').doc(currentUser.email).get();
      setCurrentAge(currentUserDoc.data().age);
      setCurrentRace(currentUserDoc.data().race);
      setCurrentSex(currentUserDoc.data().sex);
    }; 
    
     /* calculates percent match between the demographics of the current logged in user 
    and this user's whose profile is being viewed */
  getData();
}, [profileID]); 

// async function calculatePercentMatch() {
//   let match = 0
//   if (sex === currentSex){
//     match++;
//   } 
//   if (race === currentRace){
//     match++;
//   } 
 
//   let diffAge = Math.abs(currentAge - age);
//   for(let i = 0; i <= 60; i+=10){
//     if(diffAge <= i){
//       let change = i/10;
//       match = (1/change) + match
//       break;
//     }
//   }

//   return setPercentMatch((match/3)*100);
// }

// calculatePercentMatch()


//   /* calculates percent match between the demographics of the current logged in user 
//     and this user's whose profile is being viewed */
// function percentMatch (){
//     let match = 0
//     if (sex === currentSex){
//       match++;
//     } 
//     if (race === currentRace){
//       match++;
//     } 
//     let duy = match;
//     let usman = match;
//     let shruti = match;
//     //Duy's
//     let diffAge = Math.abs(currentAge - age);
//     let stuff = (currentAge-diffAge)/currentAge;
//     duy = duy+stuff;
    
//     //Usman's
//     for(let i = 0; i <= 60; i+=10){
//       if(diffAge <= i){
//         let change = i/10;
//         usman = (1/change) + usman
//         console.log("for loop check" + ((1/change)))
//       }else{
//       }
//     }
    
//     //me
//     if (diffAge <= 10) { shruti++ }

//     console.log("duys dumb shit" +  (duy/3))
//     console.log("Usman great math shit" + (usman/3))
//     console.log("idk even know wtf is going on here" + (shruti/3))
//     return ((match/3)*100);
    
//   }

    return (<>
      <div>
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
            <strong>Email:</strong> {profileID}
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
          {reviewsArray !== [] && reviewsArray.map(review => <ProfileReviews review={ review } />)}
        </ul>
      </Card>
    </>
  )}

export default ProfilePage;