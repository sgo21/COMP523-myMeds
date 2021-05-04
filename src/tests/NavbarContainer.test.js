import React from "react"
import { render, cleanup, screen, act } from './test-utils';
import NavbarContainer from '../components/NavbarContainer'
import "@testing-library/jest-dom/extend-expect";

beforeEach(async () => {
  await act(async () => {
    render(<NavbarContainer />);
  });
});

afterEach(cleanup);

it('Render the Navbar regardless of whether user logged in or not', () => {
  expect(screen.getByTestId('navbar')).toBeInTheDocument()
});

it('Render Navbar without "My Profile" link when user is not logged in', () => {
    const myProfileLink = screen.queryByText('My Profile')
    expect(myProfileLink).not.toBeInTheDocument()
});

it('Render necessary Navbar links and logo regardless of whether user logged in or not', () => {
    const logoHomeLink = screen.queryByText('My Meds')
    const faqLink = screen.queryByText('FAQ')
    const aboutLink = screen.queryByText('About')

    expect(logoHomeLink).toBeInTheDocument()
    expect(faqLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
});

it('Route user to LogIn Page when clicked on the login link in NavBar', () => {
  expect(screen.getByText("Log In")).toHaveAttribute('href', '/log-in');
});

it('Route user to Signup Page when clicked on the signup link in NavBar', () => {
  expect(screen.getByText("Sign Up")).toHaveAttribute('href', '/sign-up');
});

it('Route user to About Page when clicked on the About Page link in NavBar', () => {
  expect(screen.getByText("About")).toHaveAttribute('href', '/about');
});

it('Route user to FAQ Page when clicked on the FAQ link in NavBar', () => {
  expect(screen.getByText("FAQ")).toHaveAttribute('href', '/faq');
});

it('Route user to Home Page when clicked on the logo in NavBar', () => {
  expect(screen.getByTestId("logolink")).toHaveAttribute('href', '/');
});

