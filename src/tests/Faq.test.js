import React from 'react';
import Faq from '../pages/Faq'
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, act, screen } from './test-utils';

beforeEach(async () => {
  await act(async () => {
    render(<Faq />);
  });
});

afterEach(cleanup);

it('Render Faq page content', () => {
  expect(screen.getByTestId('faq-content')).toBeInTheDocument()
});
