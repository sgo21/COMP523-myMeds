import NavbarContainer from './components/NavbarContainer.jsx'
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyProfile from './pages/MyProfile.jsx';
import Home from './pages/Home.jsx';
import LogIn from './pages/LogIn.jsx';
import Signup from './pages/Signup.js';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch id="bodyContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/SignUp" component={Signup} />
          <PrivateRoute exact path="/my-profile" component={MyProfile}
          ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
