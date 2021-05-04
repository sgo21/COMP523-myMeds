import React from "react"
// import { render, cleanup, screen } from '@testing-library/react';
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

