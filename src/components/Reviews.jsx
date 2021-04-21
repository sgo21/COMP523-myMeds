import React, {useState} from "react";
import { Button, Card, Media } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../img/logo.svg";
import "../css/Reviews.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import IconButton from '@material-ui/core/IconButton';


function Reviews({ review }) {
  const name = review.name;
  const age = review.age;
  const sex = review.sex;
  const race = review.race;
  const symptom = review.symptom;
  const rating = review.rating;
  const reviewDescrip = review.review;
  const time = review.createdAt;

 const [likeState, setlikeState] = useState(false);

  const history = useHistory();

  async function handleLiking() {
      setlikeState(!likeState);
      alert(likeState ? 'Clicked - 1' : 'Clicked + 1');
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
          <h5>
            {name} {review.createdAt}
          </h5>
          <Box component="fieldset" mb={2} borderColor="transparent">
            <Typography component="legend">
              Demographic: {age}, {sex}, {race}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
            <p> {reviewDescrip} </p>
            
            <IconButton aria-label="delete" color="primary" onClick={handleLiking}>
              {likeState ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon /> }
            </IconButton>

          </Box>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Reviews;
