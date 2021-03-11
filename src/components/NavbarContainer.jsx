// import React, {} from 'react';

// const NavbarContainer = () => {
//     return (<>
//     navbar
//     </>)
// }

// export default NavbarContainer;


import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyProfile from './MyProfile.jsx';
import Home from './Home.jsx';
import LogIn from './Login.jsx';
import Signup from './Signup.js';
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Dashboard from './Dashboard.js';
 

const NavbarContainer = () => {
    return (
    <>  <AuthProvider>
            <div >
                <Navbar sticky="top" className="navbar" expand="md" collapseOnSelect>
                   
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto roboto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/my-profile">My Profile</Nav.Link>
                            <Nav.Link href="/LogIn">Log In</Nav.Link>
                            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <BrowserRouter>
                <Switch id="bodyContent">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/my-profile" component={MyProfile} />
                    <Route exact path="/LogIn" component={LogIn} />
                    <Route exact path="/SignUp" component={Signup} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    </>
    )
}

export default NavbarContainer;