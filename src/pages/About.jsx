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
        <Jumbotron className="p-3 rounded-0 bg-white">
          <div data-testid="about-content" style={{width:'80%'}} className="ml-5 pl-5 about-content text-left">
            <strong>Dear Contributing Patron,</strong>
            <br/>
            <br/>
            Welcome to MyMeds! Whether you heard of us through word of mouth or online, we are happy you are here!
            MyMeds was created to serve three purposes:
            <br/> 
            <ol>
            <br/> 
              <li>
                A National Awareness Platform for Medicine: As a community, we need to learn from our history 
                and work to improve. MyMeds was originally thought of an answer to the war raging on in the common 
                man’s medicine cabinet, the opioid epidemic. As helpless bystanders, “we often thought about” could have done 
                differently to of prevented or reduced the impact that opioids had (and continue to have) on our communities. 
                With this in mind, the MyMeds team has worked tirelessly to create a platform that will function as a place 
                for individuals to speak out about medications that have had negative effects on them, or people close to them. 
                In doing so, the MyMeds team will be able to use the communities' reviews to be able to catch any negative effects
                early. MyMeds will then work to catch these discrepancies, red flag these medications, and bring this malfeasance 
                to the national stage as the general publics’ worries.
              </li>
              <br/> 
              <li>
                A Resource for Individual’s Contemplating starting a Medication: By sharing your experiences, positive or negative, 
                you are helping other people make well informed decisions about what medication they should take; if any. 
                Sharing a negative experience could be the deciding factor for an individual to not take a medication. 
                Alternatively, sharing a good experience could be the push an individual needed to try a medication. 
                In any sense, it is not our job to decide for people, but it is our job to make necessary information easily accessible to them. 
                Help someone today and share your experience!
              </li>
              <br/> 
              <li>
                A Place to be Heard: One of the MyMeds team members was prescribed an antidepressant medication after his mother passed away. 
                To its credit, it helped him get past the hard months following this tragic event. When they were ready, they attempted to get off 
                the medication and experienced depressive episodes worse than any before. The solution? He is now prescribed a smaller dose antidepressant. 
                He has had this prescription for 5 years now and is not sure if it was worth the assistance from the start. 
                The MyMeds team feels like a story like this needs a platform that it can be heard on. 
                Having a place to be heard can be both therapeutic and helpful to someone contemplating the same prescription. 
                Here at MyMeds, we believe that everyones stories deserve to be heard, and hope that you will share yours!
              </li>
            </ol>
            <br/> 
            <br/> 
            All these services require one thing and that is YOU! MyMeds mission cannot be accomplished without participation from our community. By posting your 
            experiences with prescription you have taken, you will be contributing in all these missions. We appreciate you visiting the site and hope that you enjoy 
            its services!
            <br/> 
            <br/> 
            Sincerely,
            <br/> 
            <strong>MyMeds Family</strong>
            <br/>
            <br/> 
            <strong>Contact Us:</strong> 
            <br/> 
            Email: nashphilbeck00@gmail.com
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