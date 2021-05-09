import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('Render App component', () => {
  render(<App />); 
});

