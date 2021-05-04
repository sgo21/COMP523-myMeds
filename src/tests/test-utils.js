import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

// const currentUser = {
//   email: "abc@abc.com",
// };

// const login = jest.fn();
// const signup = jest.fn();
// const logout = jest.fn();
// const resetPassword = jest.fn();
// const updateEmail = jest.fn();
// const updatePassword = jest.fn();

const AllTheProviders = ({ children }) => {
    return (
      <Router>
        <AuthProvider >
          {children}
        </AuthProvider>
      </Router>
    );
  };

const customRender = (ui, options) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };