import React from 'react';
import '../css/Home.css';
import { Accordion, Card } from "react-bootstrap"
import NavbarContainer from '../components/NavbarContainer'
import Footer from '../components/Footer'

const Faq = () => {

    return (<div className='home-container'>
        <div>
          <NavbarContainer/>
        </div>  
        
        <div className="faq-content">
            <h2 className="display-4 m-5 text-center">Frequently Asked Questions (FAQ)</h2>
            <Accordion className="m-5" style={{backgroundColor: '#FFFFFF'}}>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        How do I post a review?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> 
                            <ul>
                                <li>First make sure you are logged into your MyMeds account, 
                                or sign up for one if you do not have an account. 
                                To ensure the authenticity and intergity of our platform, we require all users to be 
                                logged into a registered MyMeds account in order to post reviews. </li>
                                <li> Once you are logged in, on the home page (can be navigated to by clicking on the logo in 
                                the header), use the search bar to search for the medication 
                                you are trying to post a review for. </li>
                                <li> Then, find the medication amongst the search results and navigate to that medication's 
                                page by clicking on the "View Reviews & More Info" button located on the 
                                medication's search result box.</li>
                                <li>Once you are on that medication's page, 
                                click the "Write a Review" button located near the top of the page, fill out the 
                                form with your review's details and post the review.</li>
                            </ul>
                            </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        I cannot find the medication I am looking for on the site, what do I do?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ul>
                            <li>Navigate to the home page, click on "Request a Medication", 
                            and fill out the request form to request a medication to be included onto My Meds.</li>
                            <li>We will soon review your request and upon approval, the medication should appear 
                            on the site as a page, for users to view and post reviews for.</li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </div>
            </Accordion>
          
        </div>


        <div>
          <Footer/>
        </div> 

      </div>
    )
}

export default Faq;