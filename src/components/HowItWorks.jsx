import React, {} from 'react';
import { Jumbotron, Card, CardDeck } from "react-bootstrap"
import '../css/HowItWorks.css';


const HowItWorks = () => {
    return (
        <section>
            <Jumbotron data-testid='howitworks'className="p-5 rounded-0">
                <h2 className="how-to-title display-4 text-center mb-5">How It Works</h2>
                <CardDeck className="justify-content-center text-center mb-5">
                    <Card className="how-to-card text-center mx-3" border="primary">
                        <Card.Body>
                        <Card.Title><span className="highlight">Sign-up</span> for or log in to your account</Card.Title>
                        <hr/>
                        <Card.Text>
                            With a My Meds account, you can start posting reviews, 
                            view your profile to keep track of your reviews, and access other features such as 
                            requesting new medications to be included onto MyMeds!
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="how-to-card text-center p-1 mx-3" border="primary">
                        <Card.Body>
                        <Card.Title><span className="highlight">Search</span> for medications by name or symptom</Card.Title>
                        <hr/>
                        <Card.Text>
                            Our search feature lets you find medications by symptom or specific name.
                            To make gauging medication quality easier, poorly rated medications are red-flagged, 
                            and you can also sort your medication search results by ascending or descending rating.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="how-to-card text-center mx-3" border="primary">
                        <Card.Body>
                        <Card.Title><span className="highlight">Find & share</span> experiences with medications</Card.Title>
                        <hr/>
                        <Card.Text>
                            After navigating to the page for your medication of interest (by clicking on the 
                            "View Reviews & More Info" button), you can now post reviews for it, and view its ratings 
                            and reviews from other users of similar and varied demographic background or medical history.
                        </Card.Text>
                        </Card.Body>
                    </Card>
    
                </CardDeck>
            </Jumbotron>
        </section>
    )
}

export default HowItWorks;