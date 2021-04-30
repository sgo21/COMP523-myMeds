import React, { useState } from "react";
import { Button, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../css/Reviews.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { db, update } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Reviews({ review }) {
  const reviewId = review.user;
  const name = review.name;
  const age = review.age;
  const sex = review.sex;
  const race = review.race;
  const symptom = review.symptom;
  const rating = review.rating;
  const reviewDescrip = review.review;
  const time = review.time.toDate();
  const timeFormat =
    ("0" + (time.getMonth() + 1)).slice(-2) +
    "/" +
    time.getDate() +
    "/" +
    time.getFullYear();

  const [likeNumber, setlikeNumber] = useState(review.likeNumber);
  const likeUsers = review.likeUsers;

  const { currentUser } = useAuth();

  const checkEmail = currentUser == null ? 'no email' : currentUser.email


  const [likeState, setlikeState] = useState(
    likeUsers.includes(checkEmail) ? true : false
  );

  const history = useHistory();

  async function handleLiking() {

    if (checkEmail == 'no email') {
      return history.push("/log-in")
    } else {
    setlikeState(!likeState);

    const location = window.location.href.split("/");
    const ids = location[location.length - 1];

    const reviewRef = db
      .collection("drug")
      .doc(ids)
      .collection("Review")
      .doc(reviewId);

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
  }
  }

  const routeChange = () =>{ 
    console.log(reviewId + " button clicked")
    let path = "home/user/" + reviewId; 
    history.replace("/" + path);
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