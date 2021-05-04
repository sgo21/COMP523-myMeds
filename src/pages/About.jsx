import React from 'react';
import '../css/Home.css';
import NavbarContainer from '../components/NavbarContainer'
import Footer from '../components/Footer'
import { Jumbotron } from "react-bootstrap"

const About = () => {
    
    return (
      <div className='about-container'>
        <div>
          <NavbarContainer/>
        </div>  

        <h2 className="display-4 m-5 text-center">About</h2>
        <hr className="w-75"/>
        <Jumbotron className="p-5 rounded-0 bg-white">
          <div data-testid="about-content" className="about-content text-center">
              By pooling together users’ reviews of medicine in an openly accessible space, 
              the My Meds aims to bridge this disconnect and enable people 
              to take charge and make educated decisions regarding their own health. 
              
              It is a website for people to share their experiences and leave reviews for medicine they have taken, 
              as well as view ratings and first-hand testimonials for medication from other users of similar 
              demographic background or medical history— think of it like a “Yelp” for medicine!
          </div>
        </Jumbotron>
        <hr className="w-75"/>
        <br/>
        <br/>
        <div>
          <Footer/>
        </div> 
      </div>)
}

export default About;