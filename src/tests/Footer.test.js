import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../components/Footer'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('Render Footer component', () => {
  const { getByTestId } = render(<Footer />); 
  expect(getByTestId("footer")).toBeInTheDocument()
});

