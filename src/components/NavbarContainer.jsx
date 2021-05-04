import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/NavbarContainer.css'
import { ReactComponent as Logo } from '../img/logo.svg';
import { useAuth } from "../contexts/AuthContext"

/* NavbarContainer component selectively only displays the Navbar with "My Profile" 
link when user is logged in, otherwise displays Navbar with log in & sign up links */

export default function NavbarContainer() {
    let { currentUser } = useAuth();

    if (currentUser !== null) {
        return (
            <div data-testid="navbar" className="navbar-header">        
                <Navbar bg="primary" variant="dark" sticky="top" className="navbar" expand="md" collapseOnSelect>
                    <Navbar.Brand data-testid='logolink' className="pl-3" href="/">
                        <Logo width="75" height="75" className="d-inline-block mb-3"/> 
                        <h1 className="logo-text">My Meds</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
                        <Nav className="nav ml-auto">
                            <Nav.Link href="/my-profile">My Profile</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    } else {
        return (
            <div data-testid="navbar" className="navbar-header">        
                <Navbar bg="primary" variant="dark" sticky="top" className="navbar" expand="md" collapseOnSelect>
                    <Navbar.Brand data-testid='logolink' className="pl-3" href="/">
                        <Logo width="75" height="75" className="d-inline-block mb-3"/> 
                        <h1 className="logo-text">My Meds</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
                        <Nav className="nav ml-auto">
                            <Nav.Link href="/log-in" >Log In</Nav.Link>
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}