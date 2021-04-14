import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/NavbarContainer.css'
import { ReactComponent as Logo } from '../img/logo.svg';


const NavbarContainer = () => {
    return (
         <div className="navbar-header">        
            <Navbar bg="primary" variant="dark" sticky="top" className="navbar" expand="md" collapseOnSelect>
                <Navbar.Brand className="pl-3" href="/">
                    <Logo width="75" height="75" className="d-inline-block mb-3"/> 
                    <h1 className="logo-text">My Meds</h1>
                </Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
                    <Nav className="nav ml-auto">
                        <Nav.Link href="/my-profile">My Profile</Nav.Link>
                        <Nav.Link href="/log-in" >Log In</Nav.Link>
                        <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarContainer;