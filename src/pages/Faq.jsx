import React from 'react';
import '../css/Home.css';
import { Link } from "react-router-dom";
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
                        How do I go back to the home page from anywhere on the website?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> 
                            <ul>
                                <li >Regardless of where you are on the website, you can always go to the Home page by clicking on 
                                    the My Meds logo on the top left corner of header.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        How do I find a medication?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">Navigate to the Home page by clicking on the My Meds logo on the top left corner of header.</li>
                                <li className="mb-3">Then type a specific medication's brand name or generic name, or the symptom you are looking 
                                    to find medications for in the search bar. Then click the blue button with the pill icon, 
                                    or press the Enter key on your keyboard to search.</li>
                                <li className="mb-3">Note: Either before or after you search, you can also choose to sort you medication results 
                                    by ascending or descending rating order, by choosing the appropiate option from the "Sort by" 
                                    drop down menu displayed right below the search bar.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        I cannot find the medication I am looking for on the site. How can I request a new medication to be added onto the website?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <ul>
                                <li className="mb-3">Navigate to the home page, click on "Request a Medication", 
                                and fill out the request form to request a medication to be included onto My Meds.</li>
                                <li className="mb-3">We will soon review your request and upon approval, the medication should appear 
                                on the site as a page, for users to view and post reviews for.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        How do I post a review?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">First make sure you are <Link to="/log-in">logged into</Link> your MyMeds account, 
                                or <Link to="/sign-up">sign up</Link> for one if you do not have an account. 
                                To ensure the authenticity and intergity of our platform, we require all users to be 
                                logged into a registered MyMeds account in order to post reviews. </li>
                                <li className="mb-3"> Then, on the home page (can be navigated to by clicking on the logo in 
                                the header), use the search bar to search for the medication 
                                you are trying to post a review for. </li>
                                <li className="mb-3"> Then, find the medication amongst the search results and navigate to that medication's 
                                page by clicking on the "View Reviews & More Info" button located on the 
                                medication's search result box.</li>
                                <li className="mb-3">Once you are on that medication's page, 
                                click the "Write a Review" button located near the top of the page, fill out the 
                                form with your review's details and post the review.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        What does it mean if a medication is red-flagged for low reviews?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">Our red-flagging symptom offers an up-front and convenient way to caution our users against medications that may be poorly rated.</li>
                                <li className="mb-3">Medications are red-flagged if they have accumulated reviews resulting in an overall average rating of lower than 2 stars.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        While reading reviews, I came across a user with whom I share demographics with. How can I view what their experiences with other medications may have been?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">First go to the review posted by that user of interest.</li>
                                <li className="mb-3">Then click on that user's name on their review. You will be taken to that user's profile page, which contains an overview 
                                    of profile information such as demographics and a list of all the reviews they have posted.</li>
                                <li className="mb-3">Note: As health and medical information can be a sensitive topic, we want to be respectful of all our users' privacy, 
                                    and create a safe space where users feel comfortable to share their experiences with medicine. Thus, users cannot explicity "follow" other users on the website, 
                                    as My Meds is not a social networking platform, rather a purely informational and educational one.</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        How can I see all my previously posted reviews?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">First make sure you are <Link to="/log-in">logged into</Link> your MyMeds account, or <Link to="/sign-up">sign up</Link> for one if you do not have an account.</li>
                                <li className="mb-3">You should now be able to see and click on "My Profile" in the header, next to "About" and "FAQ".</li> 
                                <li className="mb-3">Once you are at the "My Profile" page, you should see the information (i.e. name, email, demographics, etc) that you sign-up for an account with, 
                                    as well as a list of your previously posted reviews!</li> 
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
                <div className= "text-left mx-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                        I accidentally put the wrong information when signing up for an account. How can I fix it?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body> 
                            <ul>
                                <li className="mb-3">First make sure you are <Link to="/log-in">logged into</Link> your MyMeds account, or <Link to="/sign-up">sign up</Link> for one if you do not have an account.</li>
                                <li className="mb-3">You should now be able to see and click on "My Profile" in the header, next to "About" and "FAQ".</li> 
                                <li className="mb-3">Once you are at the "My Profile" page, click on the blue "Update Profile" button.</li>
                                <li className="mb-3">You should now be able to edit your profile information.</li>
                                <li className="mb-3">Remember to click "Save" to save your updated/fixed information!</li> 
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