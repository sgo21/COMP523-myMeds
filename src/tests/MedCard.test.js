import React from "react"
import { render, cleanup, screen, act, fireEvent } from './test-utils';
import MedCard from '../components/MedCard'
import "@testing-library/jest-dom/extend-expect";

function setMed() {};

beforeEach(async () => {
  await act(async () => {
    render(<MedCard med={setMed}/>);
  });
});

afterEach(cleanup);

it('Render the MedCard component', () => {
    expect(screen.getByTestId('medcard')).toBeInTheDocument()
 });

it('Render the MedCard Component contents and clickable button', () => {
    expect(screen.getByTestId('medcard')).toBeInTheDocument()
    expect(screen.getByTestId('rating')).toBeInTheDocument()
    expect(screen.getByTestId('brandname')).toBeInTheDocument()
    expect(screen.getByTestId('medicinetype')).toBeInTheDocument()
    expect(screen.getByTestId('button')).toBeInTheDocument()
    const button = screen.getByTestId('button');
    fireEvent.click(button);

});

