import React, {} from 'react';
import { Media } from "react-bootstrap"
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

/* ProfileReviews (represents the reviews posted by other users) takes in a parameter 
which is a single review from Profile Page and it return the review into an neat box 
with the information to be displayed on the Profile Page */ 

function ProfileReviews ({ review }) {
    const age = review.age;
    const sex = review.sex;
    const race = review.race;
    const symptom = review.symptom;
    const rating = review.rating;
    const reviewDescrip  = review.review;
    const likeNumber = review.likeNumber;
    const genericName = review.genericName;
    const drugId = review.user;
    const time = review.time.toDate();
    const timeFormat =
      ("0" + (time.getMonth() + 1)).slice(-2) +
      "/" +
      time.getDate() +
      "/" +
      time.getFullYear();

    return (<div className="border-bottom">
            <Media as="li">
                <Media.Body>
                    <h5><Link to={"/home/med/" + drugId}>{genericName}</Link></h5>
                    <Box component="fieldset" mb= {2} borderColor="transparent" style={{overflowWrap: 'break-word', textOverflow: "ellipsis", width: '100%'}}>
                        <Typography component="legend"> {timeFormat} </Typography>
                        <Typography component="legend">
                        <strong>Demographic:</strong> {age}, {sex}, {race}
                        <br></br>
                        <strong>Symptom:</strong> {symptom}
                        </Typography>
                        <Rating name="read-only" value={rating} readOnly className="mt-2"/>
                        <p className="w-75"> {reviewDescrip} </p>
                        <Typography component="legend"> 
                            <ThumbUpIcon style={{fontSize:'20px'}}/> {likeNumber} Likes
                        </Typography>

                    </Box>
                </Media.Body>
            </Media>
    </div>)}

export default ProfileReviews;        
