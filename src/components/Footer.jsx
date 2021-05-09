import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
    return (
    <footer data-testid="footer">        
        <Navbar bg="primary" variant="dark" className="navbar py-3">
            <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
                <Nav className="nav m-auto">
                    <Nav.Link href="/">2021 MyMeds, Inc</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </footer>)
}

export default Footer;