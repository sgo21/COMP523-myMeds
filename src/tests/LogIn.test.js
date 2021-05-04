import React from "react"
import { render, cleanup, screen, act, fireEvent } from './test-utils';
import Login from '../pages/LogIn'
import "@testing-library/jest-dom/extend-expect";

beforeEach(async () => {
  await act(async () => {
    render(<Login />);
  });
});

afterEach(cleanup);

it('Render the Login page component', () => {
   expect(screen.getByTestId('login')).toBeInTheDocument()
});

it('Render Login form inputs and button correctly', () => {
    const loginHelpText = screen.getByTestId('login-help-text')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const loginButton = screen.getByTestId('login-button')

    expect(loginHelpText).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
});

it("Login form allow user input interaction and submission", () => {
    const loginForm = screen.getByTestId('login-form')
    const emailInput = screen.getByLabelText('Email')
    const emailTestValue = "testing@gmail.com";
    const passwordInput = screen.getByLabelText('Password')
    const passwordTestValue = "Testing123!";
    // const loginButton = screen.getByTestId('login-button')
    const handleSubmit = jest.fn()

    fireEvent.change(emailInput, { target: { value: emailTestValue } });
    fireEvent.change(passwordInput, { target: { value: passwordTestValue } });
    
    expect(screen.getByDisplayValue(emailTestValue) === emailInput).toBe(true)
    expect(screen.getByDisplayValue(passwordTestValue) === passwordInput).toBe(true)

    fireEvent.submit(loginForm);
    expect(handleSubmit).toHaveBeenCalled();
});

it("Show alert when invalid email entered", () => {
    const loginForm = screen.getByTestId('login-form')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    // const loginButton = screen.getByTestId('login-button')

    fireEvent.change(emailInput, { target: { value: "invalidEmail@domain.com" } });
    fireEvent.change(passwordInput, { target: { value: "Testing123!" } });
    // fireEvent.click(loginButton);

    fireEvent.submit(loginForm);
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
});

it("Show alert when invalid password entered", () => {
    const loginForm = screen.getByTestId('login-form')
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    // const loginButton = screen.getByTestId('login-button')

    fireEvent.change(emailInput, { target: { value: "testing@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    // fireEvent.click(loginButton);

    fireEvent.submit(loginForm);
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
});

// it("Succeed login when valid credentials entered", () => {
//     const emailInput = screen.getByLabelText('Email')
//     const passwordInput = screen.getByLabelText('Password')
//     const loginButton = screen.getByTestId('login-button')

//     fireEvent.change(emailInput, { target: { value: "testing@gmail.com" } });
//     fireEvent.change(passwordInput, { target: { value: "Testing123!" } });
//     fireEvent.click(loginButton);
// });


