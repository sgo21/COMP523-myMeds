import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../components/Footer'

afterEach(cleanup);

it('render footer', () => {
  const { getByTestId } = render(<Footer />); 
  expect(getByTestId("footer")).toBeInTheDocument
});
