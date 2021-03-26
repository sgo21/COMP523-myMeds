
import React, { useState } from 'react';
import {db} from '../firebase'
import '../css/Home.css';
import NavbarContainer from '../components/NavbarContainer'
import { Form, Button, Row, Col} from "react-bootstrap"
import { queryAllByAltText } from '@testing-library/dom';


const Home = () => {



    const [query, setQuery] = useState("");
    const [results, setResultsArray] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();

      db.collection("drug").where("genericName", '==', query).get().then((querySnapshot) => {
        if (querySnapshot.empty) {
          alert("No matching documents");
          return;
        } 
            
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().genericName);
          let searchResults = [];
          searchResults.push(doc.data().genericName);
          // results.push(doc.data().genericName);

          setResultsArray(oldArray => [...oldArray, searchResults])
          console.log(results);

        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });



    };



    return (
      <div className='home'>
        <div>
          <NavbarContainer/>
        </div>  
        
        <div className="submit">
          <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Label>Find Reviews on Medicine From Real People Just Like You!</Form.Label>
            <Form.Control className="form-control-lg"
            placeholder='Enter a Medication Name or Symptom'
            value={query} 
            onChange={(e) => setQuery(e.target.value)}/> 
          
    
            <Button className="text-center mt-3" type='submit'>Submit</Button>
            </Form.Row>
          </Form>
        </div>
        <div className="search-results">
          {results}
        </div>
        
      </div>
      
    )
}

export default Home;