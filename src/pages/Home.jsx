import React, { useState } from 'react';
import {db} from '../firebase'
import '../css/Home.css';
import { Form, Button, Alert, CardDeck} from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import MedCard from '../components/MedCard'
import { v4 as uuidv4 } from 'uuid';
import RequestForm from '../components/RequestForm'
import PrivateRoute from "../components/PrivateRoute"
import Footer from '../components/Footer'
import {aww} from '../data'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";



const Home = () => {

    const [query, setQuery] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [resultsArray, setResultsArray] = useState([]);
    const [showRequestForm, setShowRequestForm] = useState(false)
    const [sortBy, setSortBy] = useState("");

    // helper functions to standardize query's caseing
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
    }
    function titleCase(str) {
      return str.replace(/[^\ \/\-\_]+/g, capitalize);
    }

    // toggles the "request a new medication" form component on button click
    const onClick = () => {
      if (showRequestForm) {
        setShowRequestForm(false);
      } else { 
        setShowRequestForm(true)
      }
    }

    const getData = async () => {
      // searches through docs for query match in 'genericName' first. If no matches, searches for query match in 'brandNames' next, and so on.
      // if (query !== "" ) {
      //   let querySnapshot = await db.collection("drug").where("genericName", '==', query.toLowerCase()).get();
      //   if (querySnapshot.empty) {
      //     console.log("No matching genericName docs");
      //     querySnapshot = await db.collection("drug").where("brandName", '==', titleCase(query)).get()
      //     if (querySnapshot.empty) {
      //       console.log("No matching brandName docs");
      //       querySnapshot = await db.collection("drug").where("indication", '==', titleCase(query)).get()
      //       if (querySnapshot.empty) {
      //         console.log("No matching indication docs")
      //         setAlertMessage("No matching medications found!")
      //         console.log(aww)
      //         return;
      //       }
      //     }
      //   }
      //   // goes through each of the retrieved query matched docs, and stores each as an object in resultsArray
      //   setResultsArray([]);
      //   querySnapshot.forEach((doc) => {
      //     // normalizes rating and reviewsAmt values, so that if a med's does not have reviews and has an undefined overall rating value, those are saved as 0
      //     let rating = doc.data().rating;
      //     if (rating === undefined) { rating = 0 };

      //     let reviewsAmt = doc.data().reviews;
      //     if (reviewsAmt === undefined) { reviewsAmt = 0 };

      //     setResultsArray(resultsArray => 
      //       [...resultsArray, ...[{medId: doc.id, genericName: titleCase(doc.data().genericName), brandName: doc.data().brandName, indication: doc.data().indication, rating:rating, reviewsAmt: reviewsAmt}]]
      //     );
      //   })
      //   setAlertMessage("")
      // }
      alert(query)
    }   

    // updates query variable every time user types into the search bar  
    const onChange = e => {
      // setQuery(e.target.value);
      console.log(e.target.value);
    }

    // when search button is pressed, calls getData() to fetch the search results
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };

    return (
<div className='home-container'>
        <div>
          <NavbarContainer/>
        </div>  
        
        <div className="med-search-form">
          <Form onSubmit={onSubmit}>
              {alertMessage !== "" &&  <Alert className="text-center" variant='danger'>{alertMessage}</Alert>}
              <h3 className="text-center mb-4">Find Reviews on Medicine From Real People Like You!</h3>


            {/* <Form.Row className="justify-content-center align-items-center text-center">
              <Form.Control size="lg" className="search-bar text-center"
              placeholder='Enter a Medication Name or Symptom'
              value={query} 
              onChange={onChange}/> 
            </Form.Row > */}


          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={aww}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                onChange ={e => setQuery(e.target.value)}
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
          

            <Form.Row className="sort-by-dropdown text-center mt-3">
              <Form.Group>
                    <Form.Control defaultValue='' as="select" onChange ={e => setSortBy(e.target.value)}>
                        <option key='noSortSelected' value='' hidden>Sort By</option>
                        <option value=''>Sort By: None</option>
                        <option value="asc-rating">Sort By: Ascending Rating</option>
                        <option value="desc-rating">Sort By: Descending Rating</option>
                    </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-center" >
              <Button className="mt-3" size="lg" type='submit'>Search</Button>
                <Button onClick={onClick} className="mt-3 " variant="link"> Request a Medication</Button>
            </Form.Row>
            <Form.Row className="justify-content-center">
								  { showRequestForm ? <PrivateRoute component={RequestForm}></PrivateRoute>  : null } 
            </Form.Row>
          </Form>
        </div>

        <CardDeck className="med-search-card-deck align-items-center">
          {resultsArray !== [] && sortBy === '' && resultsArray.map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && sortBy === 'asc-rating' && resultsArray
                                                            .sort((a, b) => a.rating - b.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && sortBy === 'desc-rating' && resultsArray
                                                            .sort((a, b) => b.rating - a.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
        </CardDeck>

        <div>
          <Footer/>
        </div> 

      </div>
    )
}

export default Home;