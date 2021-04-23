import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
    return (<div className="footer mt-5">        
    <Navbar bg="primary" variant="dark" fixed="bottom" className="navbar">
        <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
            <Nav className="nav m-auto">
                <Nav.Link href="/">2021 MyMeds, Inc</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>)
}

export default Footer;