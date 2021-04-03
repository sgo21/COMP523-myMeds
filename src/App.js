import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyProfile from './pages/MyProfile.jsx';
import Home from './pages/Home.jsx';
import LogIn from './pages/LogIn.jsx';
import Signup from './pages/Signup.js';
import MedPage from './pages/MedPage.jsx';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/home/:medId`} render={props => <MedPage {...props.match.params} />} />
          <Route exact path="/SignUp" component={Signup} />
          <Route exact path="/LogIn" component={LogIn} />
          <PrivateRoute exact path="/my-profile" component={MyProfile}
          ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
