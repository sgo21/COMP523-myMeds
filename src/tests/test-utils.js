import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

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