import React, { useState } from "react";
import { Button, Card, Media } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../img/logo.svg";
import "../css/Reviews.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { db, update } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

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

  const [likeState, setlikeState] = useState(
    likeUsers.includes(currentUser.email) ? true : false
  );

  const history = useHistory();

  async function handleLiking() {
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
      alert("add done");
    } else if (likeState) {
      reviewRef.update({
        likeNumber: update.increment(-1),
      });

      reviewRef.update({
        likeUsers: update.arrayRemove(currentUser.email),
      });

      setlikeNumber(likeNumber - 1);
      alert("delete done");
    }
  }

  return (
    <div>
      <Media as="li">
        <Logo
          width="40"
          height="40"
          className="logo d-inline-block mb-3 mr-3"
        />

        <Media.Body>
          <h5>{name}</h5>
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
            <Typography component="legend">
              Demographic: {age}, {sex}, {race}
              <br></br>
              Symptom: {symptom}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Rating name="read-only" value={rating} readOnly />
              <Typography component="legend">
                {timeFormat}
              </Typography>
            </div>

            <p>{reviewDescrip}</p>

            <IconButton
              aria-label="delete"
              color="primary"
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