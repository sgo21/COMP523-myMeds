import React from "react"
import { render, cleanup, screen, act, fireEvent } from './test-utils';
import HowItWorks from '../components/HowItWorks'
import "@testing-library/jest-dom/extend-expect";

beforeEach(async () => {
  await act(async () => {
    render(<HowItWorks />);
  });
});

afterEach(cleanup);

it('Render the HowItWorks component', () => {
    expect(screen.getByTestId('howitworks')).toBeInTheDocument()
 });

it('Render the HowItWorks Sign-up How to Info card ', () => {
    expect(screen.getByText('Sign-up')).toBeInTheDocument()
 });

it('Render the HowItWorks Search Info card', () => {
    expect(screen.getByText('Search')).toBeInTheDocument()
 });

it('Render the HowItWorks Find & share Info card', () => {
    expect(screen.getByText('Find & share')).toBeInTheDocument()
 });