import React from "react"
import { render, cleanup, screen, act, fireEvent } from './test-utils';
import Signup from '../pages/Signup'
import "@testing-library/jest-dom/extend-expect";

beforeEach(async () => {
  await act(async () => {
    render(<Signup />);
  });
});

afterEach(cleanup);

it('Render the full Sign up form', () => {
    expect(screen.getByTestId('help')).toBeInTheDocument()
    expect(screen.getByTestId('name')).toBeInTheDocument()
    expect(screen.getByTestId('age')).toBeInTheDocument()
    expect(screen.getByTestId('race')).toBeInTheDocument()
    expect(screen.getByTestId('sex')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('pass')).toBeInTheDocument()
    expect(screen.getByTestId('pass-conf')).toBeInTheDocument()
    expect(screen.getByTestId('button')).toBeInTheDocument()
});

it("Button disabled when Age is not a number", () => {
    const ageInput = screen.getByTestId('age-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(ageInput, { target: { value: "as" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when Age is a number and a letter", () => {
    const ageInput = screen.getByTestId('age-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(ageInput, { target: { value: "2s" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button enabled when Age is a number", () => {
    const ageInput = screen.getByTestId('age-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(ageInput, { target: { value: "22" } });
    expect(signUpbutton).toBeEnabled();
});

it("Button disabled when Race has invalid characters", () => {
    const raceInput = screen.getByTestId('race-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(raceInput, { target: { value: "African23 American2" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button enabled when Race has invalid characters", () => {
    const raceInput = screen.getByTestId('race-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(raceInput, { target: { value: "Asian" } });
    expect(signUpbutton).toBeEnabled();
});

it("Feedback when email is invalid and button is disabled", () => {
    const emailInput = screen.getByTestId('email-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(emailInput, { target: { value: "test" } });
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(signUpbutton).toBeDisabled();
});

it("Feedback for invalid email without .com", () => {
    const emailInput = screen.getByTestId('email-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(emailInput, { target: { value: "test@gmail" } });
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when email is invalid", () => {
    const emailInput = screen.getByTestId('email-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(emailInput, { target: { value: "test@gmail" } });
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(signUpbutton).toBeDisabled();
});

it("Button enabled when email is valid", () => {
    const emailInput = screen.getByTestId('email-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    expect(signUpbutton).toBeEnabled();
});

it("Button disabled when password is not long enough", () => {
    const passInput = screen.getByTestId('pass-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tset" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password does not contain a number", () => {
    const passInput = screen.getByTestId('pass-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tsettestt" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password does not contain a special character", () => {
    const passInput = screen.getByTestId('pass-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tsettest1" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password does not contain a uppercase letter", () => {
    const passInput = screen.getByTestId('pass-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tsettest!1" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password is valid but no confirmation password field has not been filled", () => {
    const passInput = screen.getByTestId('pass-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tsettest!1" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password invalid and passwords are not matching", () => {
    const passInput = screen.getByTestId('pass-input');
    const passConfInput = screen.getByTestId('pass-conf-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "tsettset!2" } });
    fireEvent.change(passConfInput, { target: { value: "tsettset$3" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button disabled when password valid and passwords are not matching", () => {
    const passInput = screen.getByTestId('pass-input');
    const passConfInput = screen.getByTestId('pass-conf-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "Tsettset!2" } });
    fireEvent.change(passConfInput, { target: { value: "Tsettset!5" } });
    expect(signUpbutton).toBeDisabled();
});

it("Button enabled when password valid and passwords are matching", () => {
    const passInput = screen.getByTestId('pass-input');
    const passConfInput = screen.getByTestId('pass-conf-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(passInput, { target: { value: "Tsettset!2" } });
    fireEvent.change(passConfInput, { target: { value: "Tsettset!2" } });
    expect(signUpbutton).toBeEnabled();
});

it("Button enabled when all fields are valid", () => {
    const passInput = screen.getByTestId('pass-input');
    const passConfInput = screen.getByTestId('pass-conf-input');
    const emailInput = screen.getByTestId('email-input');
    const raceInput = screen.getByTestId('race-input');
    const ageInput = screen.getByTestId('age-input');
    const signUpbutton = screen.getByTestId('button');
    fireEvent.change(ageInput, { target: { value: "22" } });
    fireEvent.change(raceInput, { target: { value: "Asian" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passInput, { target: { value: "Tsettset!2" } });
    fireEvent.change(passConfInput, { target: { value: "Tsettset!2" } });
    expect(signUpbutton).toBeEnabled();
});