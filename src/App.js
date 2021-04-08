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


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch id="bodyContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/LogIn" component={LogIn} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/SignUp" component={Signup} />
          <PrivateRoute exact path="/my-profile" component={MyProfile}
          ></PrivateRoute>
=======
=======
>>>>>>> parent of 5adec61 (Idk man)
          <PrivateRoute exact path="/my-profile" component={MyProfile}
          ></PrivateRoute>
          <PrivateRoute component={ReviewForm}></PrivateRoute>
>>>>>>> parent of 5adec61 (Idk man)
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
