import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { db, update } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

/* Reviews component takes in a prop which is a single "review" object from MedPage.jsx
  and returns the review as a neat box with the information to be displayed on the MedPage.jsx */ 

function Reviews({ review }) {

  const history = useHistory();
  const reviewId = review.user;
  const name = review.name;
  const age = review.age;
  const sex = review.sex;
  const race = review.race;
  const symptom = review.symptom;
  const rating = review.rating;
  const reviewDescrip = review.review;
  const [likeNumber, setlikeNumber] = useState(review.likeNumber);
  const likeUsers = review.likeUsers;
  const time = review.time.toDate();

  //changing the time format into MM/DD/YYYY
  const timeFormat =
    ("0" + (time.getMonth() + 1)).slice(-2) +
    "/" +
    time.getDate() +
    "/" +
    time.getFullYear();

  //checking if user is logged in or not  
  const { currentUser } = useAuth();
  const checkEmail = currentUser == null ? 'no email' : currentUser.email
  
  // hook to track of whether the current logged in user has liked a review
  const [likeState, setlikeState] = useState(
    likeUsers.includes(checkEmail) ? true : false
  );
  
  /* based on current user toggling the lieks button, updating the med's "likes" count and 
  adding/removing the current user's email as a "liker" in the database */
  async function handleLiking() {

    // redirecting to log in page if user is not signing/unregistered with an account
    if (checkEmail === 'no email') {
      return history.push("/log-in")
    } else {
    setlikeState(!likeState);
    
  // extracting medId from path URL to use later, as document ID when fetching from the firebase
    const location = window.location.href.split("/");
    const medId = location[location.length - 1];

    const reviewRef = db
      .collection("drug")
      .doc(medId)
      .collection("Review")
      .doc(reviewId);
    
    // increment or decrement the like number and keep track of which user like the comment
    if (!likeState) {
      reviewRef.update({
        likeNumber: update.increment(1),
      });

      reviewRef.update({
        likeUsers: update.arrayUnion(currentUser.email),
      });

      setlikeNumber(likeNumber + 1);

    } else if (likeState) {
      reviewRef.update({
        likeNumber: update.increment(-1),
      });

      reviewRef.update({
        likeUsers: update.arrayRemove(currentUser.email),
      });

      setlikeNumber(likeNumber - 1);
    }

    const userRef = db
    .collection("User")
    .doc(reviewId)
    .collection("Review")
    .doc(medId);

    // update the like and which user like the comment in the user collection
    if (!likeState) {
      userRef.update({
        likeNumber: update.increment(1),
      });

      setlikeNumber(likeNumber + 1);

    } else if (likeState) {
      userRef.update({
        likeNumber: update.increment(-1),
      });

      setlikeNumber(likeNumber - 1);
    }
  }
  }

  return (
    <div className="bg-light p-4 w-75 border-bottom justify-contents-center" style={{borderRadius:5}}>
      <Media as="li">

        <AccountCircleIcon 
          className="d-inline-block mb-3 mr-3" 
          style={{fontSize:'45px'}}
        />

        <Media.Body>
          <h5><Link to={"/home/user/" + reviewId}>{name}</Link></h5>

          <Box
            component="fieldset"
            mb={2}
            borderColor="transparent"
            style={{
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
              width: "80%",
            }}
          >
            <Typography component="legend"> {timeFormat} </Typography>
            <Typography component="legend">
              <strong>Demographic:</strong> {age}, {sex}, {race}
              <br></br>
              <strong>Symptom:</strong> {symptom}
            </Typography>
           
            <Rating name="read-only" value={rating} readOnly />

            <p>{reviewDescrip}</p>

            <IconButton
              aria-label="delete"
              size = "small"
              edge = "start"
              onClick={handleLiking}
              className="likeButton"
              style={{fontSize:'20px'}}
            >
              {likeState ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
              {likeNumber}
            </IconButton>
          </Box>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Reviews;