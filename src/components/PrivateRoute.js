import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

/* Wrapper that redirects to LogIn.jsx page component if user is not 
signed into an account registered with the database */

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/log-in" />
      }}
    ></Route>
  )
}