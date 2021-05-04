import React from 'react';
import Home from '../pages/Home'
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, act, screen, fireEvent } from './test-utils';

beforeEach(async () => {
  await act(async () => {
    render(<Home />);
  });
});

afterEach(cleanup);

it('Render Home page content', () => {
const medSearchForm = screen.getByTestId('med-search-form')
  const searchBar = screen.getByTestId('search-bar')
  const howItWorksSection = screen.getByText('How It Works')
  const sortByDropdown = screen.getByLabelText('Sort-By')
  const searchButton = screen.getByTestId('search-button')
  const requestButton = screen.getByTestId('request-button')

  expect(medSearchForm).toBeInTheDocument()
  expect(searchBar).toBeInTheDocument()
  expect(howItWorksSection).toBeInTheDocument()
  expect(sortByDropdown).toBeInTheDocument()
  expect(searchButton).toBeInTheDocument()
  expect(requestButton).toBeInTheDocument()
});

it("Home search bar allows user input interaction and submission", () => {
    const medSearchForm = screen.getByTestId('med-search-form')
    const searchBar = screen.getByTestId('search-bar')
    const searchButton = screen.getByTestId('search-button')
    const testMedValue = 'Ibuprofen'

    fireEvent.change(searchBar, { target: { value: testMedValue } });
    
    expect(screen.getByDisplayValue(testMedValue) === searchBar).toBe(true)
    
    expect(searchButton).toBeEnabled();
    fireEvent.click(searchButton);
    fireEvent.submit(medSearchForm);
});