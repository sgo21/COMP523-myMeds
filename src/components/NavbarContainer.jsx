import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyProfile from '../pages/MyProfile.jsx';
import Home from '../pages/Home.jsx';
import LogIn from '../pages/LogIn.jsx';
import Signup from '../pages/Signup.js';
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Dashboard from './Dashboard.js';
import '../css/NavbarContainer.css'

const NavbarContainer = () => {
    return (
         <div >
            <h1>MyMeds</h1>
        
            <Navbar sticky="top" className="navbar" expand="md" collapseOnSelect variant='light'>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Navlink">
                        <div className="home-nav-link"><Nav.Link className="home-nav-link" href="/">My Meds</Nav.Link></div>
                        <Nav.Link href="/my-profile">My Profile</Nav.Link>
                        <Nav.Link href="/LogIn" >Log In</Nav.Link>
                        <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarContainer;