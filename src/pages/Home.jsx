import React, { useState } from 'react';
import {db} from '../firebase'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import '../css/Home.css';
import { Form, Button, Row, ToggleButton, ToggleButtonGroup, Col, Alert, CardDeck} from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import MedCard from '../components/MedCard'
import ProfileCard from '../components/ProfileCard'
import { v4 as uuidv4 } from 'uuid';
import RequestForm from '../components/RequestForm'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import { titleCase } from '../helpers/formatting.jsx';


const Home = () => {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState();
    const [alertMessage, setAlertMessage] = useState("");
    const [resultsArray, setResultsArray] = useState([]);
    const [sortBy, setSortBy] = useState("");
    
    const history = useHistory()
    const {currentUser} = useAuth();

    const getData = async () => {
      // searches through docs for query match in 'genericName' first. If no matches, searches for query match in 'brandNames' next, and so on.
      if (query !== "" ) {
        let querySnapshot = await db.collection("drug").where("genericName", '==', query.toLowerCase()).get();
        if (querySnapshot.empty) {
          console.log("No matching genericName docs");
          querySnapshot = await db.collection("drug").where("brandName", '==', titleCase(query)).get()
          if (querySnapshot.empty) {
            console.log("No matching brandName docs");
            querySnapshot = await db.collection("drug").where("indication", '==', titleCase(query)).get()
            if (querySnapshot.empty) {
              console.log("No matching indication docs")
              setAlertMessage("No matching medications found!")
              return;
            }
          }
        }
        // goes through each of the retrieved query matched docs, and stores each as an object in resultsArray
        setResultsArray([]);
        querySnapshot.forEach((doc) => {
          // normalizes rating and reviewsAmt values, so that if a med's does not have reviews and has an undefined overall rating value, those are saved as 0
          let rating = doc.data().rating;
          if (rating === undefined) { rating = 0 };

          let reviewsAmt = doc.data().reviews;
          if (reviewsAmt === undefined) { reviewsAmt = 0 };

          setResultsArray(resultsArray => 
            [...resultsArray, ...[{medId: doc.id, genericName: titleCase(doc.data().genericName), brandName: doc.data().brandName, indication: doc.data().indication, rating:rating, reviewsAmt: reviewsAmt}]]
          );
        })
        setAlertMessage("")
      }
    }

    // const getDataProfiles = async () => {
    //   if (query !== "") {
    //     // for now, only spacing matters
    //     // let querySnapshot = await db.collection("User").where("name", "!=", "").get();
    //     // console.log(query)
    //     // console.log("Here!" + titleCase(query))
    //     let querySnapshot = await db.collection("User").where("name", '==', titleCase(query)).get();
    //     if (querySnapshot.empty) {
    //       console.log("No users with that name found");
    //     }
    //     setResultsArray([]);
    //     querySnapshot.forEach((doc) => {
    //       setResultsArray(resultsArray =>
    //         [...resultsArray, ...[{email: doc.id, age: doc.data().age, name: doc.data().name, race: doc.data().race, sex: doc.data().sex}]]
    //       );
    //     })
    //   }
    //   console.log(resultsArray);
    // }

    // const handleChange = e => {
    //   setQuery("")
    //   console.log(e)
    //   setSearch(e)
    //   // setSearch(e.target.value)
    // }
    const onChange = e => {
      setQuery(e.target.value);
    }

    // when search button is pressed, calls getData() to fetch the search results
    const onSubmit = e => {
      e.preventDefault();
      getData();
    }

    return (
      <div className='home-container'>
        <div>
          <NavbarContainer/>
        </div>  
        
        <div className="med-search-form mt-5">
          <Form onSubmit={onSubmit}>
          <Form.Row className="align-items-center">
            <Col>
               {alertMessage !== "" &&  <Alert className="text-center" variant='danger'>{alertMessage}</Alert>}
              <h3 className="display-4 text-center mb-4">Find & Share Reviews on Medicine</h3>
              <Form.Row className="justify-content-center align-items-center text-center">
                <Form.Control size="lg" className="search-bar text-center"
                placeholder='Enter a Medication Name or Symptom to Find Reviews'
                value={query} 
                onChange={onChange}/> 
              </Form.Row >

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

              {/* <Col className="text-center">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange} id="filter">
                  <ToggleButton value={1}>Medications</ToggleButton>
                  <ToggleButton value={2}>Profiles</ToggleButton>
                </ToggleButtonGroup>
              </Col> */}
            
              <Form.Row className="justify-content-center" >
                <Button type='submit' className="mt-3" size="lg" style={{borderRadius:25}} >Search</Button>
              </Form.Row>

              {/* <Form.Row className="justify-content-center" >
                <Button onClick={onClick} className="mt-3 " variant="link"> Request a Medication</Button>
              </Form.Row>
              <Form.Row className="justify-content-center">
                { showRequestForm ? <PrivateRoute component={RequestForm}></PrivateRoute>  : null } 
              </Form.Row> */}
               <Form.Row className="justify-content-center">
                { (currentUser !== null) ? <RequestForm/> 
                  : <Button onClick={() => history.push('/log-in')} className="mt-3 " variant="link"> 
                      Request a Medication
                    </Button>
                }
              </Form.Row>
              </Col>
            </Form.Row>
          </Form>
        </div>

        {/* <CardDeck className="med-search-card-deck align-items-center">
          {resultsArray !== [] && search !== 2 && resultsArray.map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && search === 2 && resultsArray.map(profile => <ProfileCard key={profile.email} profile={profile} />)}
          {resultsArray !== [] && sortBy === 'asc-rating' && resultsArray
                                                            .sort((a, b) => a.rating - b.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && sortBy === 'desc-rating' && resultsArray
                                                            .sort((a, b) => b.rating - a.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
        </CardDeck> */}

        <CardDeck className="med-search-card-deck align-items-center mb-3">
          {resultsArray !== [] && sortBy === '' && resultsArray.map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && sortBy === 'asc-rating' && resultsArray
                                                            .sort((a, b) => a.rating - b.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
          {resultsArray !== [] && sortBy === 'desc-rating' && resultsArray
                                                            .sort((a, b) => b.rating - a.rating)
                                                            .map(med => <MedCard key={uuidv4()} med={med} />)}
        </CardDeck>


        <div>
          <HowItWorks/>
        </div> 

        <div>
          <Footer/>
        </div> 
      </div>
    )
}

export default Home;