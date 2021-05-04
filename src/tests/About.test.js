import React from 'react';
// import { render, cleanup } from '@testing-library/react';
import About from '../pages/About'
import "@testing-library/jest-dom/extend-expect";
// import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, act, screen } from './test-utils';

beforeEach(async () => {
  await act(async () => {
    render(<About />);
  });
});
afterEach(cleanup);

it('Render About page content', async () => {
  expect(screen.getByTestId('about-content')).toBeInTheDocument()
});
