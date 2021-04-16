import React, { useState } from 'react';
import {db} from '../firebase'
import '../css/Home.css';
import { Form, Button, Row, Col, Alert, CardDeck} from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import MedCard from '../components/MedCard'
import { v4 as uuidv4 } from 'uuid';
import RequestForm from '../components/Request'

const Home = () => {

    const [query, setQuery] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [resultsArray, setResultsArray] = useState([]);
    const [showRequestForm, setShowRequestForm] = useState(false)
  
    // functions to standardize query's caseing
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
    }
    function titleCase(str) {
      return str.replace(/[^\ \/\-\_]+/g, capitalize);
    }

    // toggles the request a new medication form component on button click
    const onClick = () => {
      if (showRequestForm) {
        setShowRequestForm(false);
      } else { 
        setShowRequestForm(true)
      }
    }

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
        // stores the docs that match user query as objects in resultsArray
        setResultsArray([]);
        querySnapshot.forEach((doc) => {
          setResultsArray(resultsArray => 
            [...resultsArray, ...[{medId: doc.id, genericName: titleCase(doc.data().genericName), brandName: doc.data().brandName, indication: doc.data().indication, rating:doc.data().rating}]]
          );
          console.log(doc.data().rating)

        })
        setAlertMessage("")
      }
    }      
      
    const onChange = e => {
      setQuery(e.target.value);
    }

    const onSubmit = e => {
      e.preventDefault();
      console.log("The search query is " + query);
      getData();
    };

    return (
      <div className='home-container'>
        <div>
          <NavbarContainer/>
        </div>  
        
        <div className="med-search-form">
          <Form onSubmit={onSubmit}>
          <Form.Row className="align-items-center">
            <Col>
            {alertMessage !== "" &&  <Alert className="text-center" variant='danger'>{alertMessage}</Alert>}
            <h3 className="text-center mb-4">Find Reviews on Medicine From Real People Like You!</h3>
            <Form.Control  
              className="search-bar text-center form-control-lg"
              placeholder='Enter a Medication Name or Symptom'
              value={query} 
              onChange={onChange}
            /> 
            <Col className="text-center">
              <Button className="mt-4" size="lg" type='submit'>Search</Button>
                <Button onClick={onClick} className="mt-3 " variant="link"> Request a Medication</Button>
                { showRequestForm ? <RequestForm/> : null }
            </Col>
            </Col>
            </Form.Row>
          </Form>
        </div>

        <CardDeck className="med-search-card-deck align-items-center">
          {resultsArray !== [] && resultsArray.map(med => <MedCard key={uuidv4()} med={med} />)}
        </CardDeck>

      </div>
    )
}

export default Home;