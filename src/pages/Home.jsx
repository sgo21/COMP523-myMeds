
import React, { useState } from 'react';
import {db} from '../firebase'
import '../css/Home.css';
import { Form, Button, Row, Col, Alert, CardDeck} from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import MedCard from '../components/MedCard'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [query, setQuery] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [resultsArray, setResultsArray] = useState([]);

    // functions to standardize query's caseing
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
    }
    function titleCase(str) {
      return str.replace(/[^\ \/\-\_]+/g, capitalize);
    }

    const getData = async () => {
      // searches through genericNames docs first. If no matches, searches brandNames doc next, and so on.
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
        setResultsArray([]);
        querySnapshot.forEach((doc) => {
          setResultsArray(resultsArray => 
            [...resultsArray, ...[{medId: doc.id, genericName: titleCase(doc.data().genericName), brandName: doc.data().brandName, indication: doc.data().indication}]]
          );
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
            <Form.Control className="search-bar text-center form-control-lg"
            placeholder='Enter a Medication Name or Symptom'
            value={query} 
            onChange={onChange}/> 
          
            <Col className="text-center">
              <Button className="mt-4" size="lg" type='submit'>Submit</Button>
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