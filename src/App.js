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
import UpdateProfile from './pages/UpdateProfile.jsx';
import Faq from './pages/Faq.jsx';
import ReviewForm from "./components/ReviewForm"
import ProfilePage from "./pages/ProfilePage"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/home/user/:profileID`} render={props => <ProfilePage {...props.match.params} />} />
          <Route exact path={`/home/med/:medId`} render={props => <MedPage {...props.match.params} />} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/faq" component={Faq} />
          <PrivateRoute exact path="/my-profile" component={MyProfile}></PrivateRoute>
          <PrivateRoute exact path="/update-profile" component={UpdateProfile}></PrivateRoute>
          <PrivateRoute component={ReviewForm}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
