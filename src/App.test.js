import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator with initial display 0', () => {
  const { getByText } = render(<App />);
  const displayElement = getByText(/0/i);
  expect(displayElement).toBeInTheDocument();
});



test('perform addition operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/3/i);
  expect(displayElement).toBeInTheDocument();
});

test('perform subtraction operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/3/i);
  expect(displayElement).toBeInTheDocument();
});




test('perform division operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/4/i);
  expect(displayElement).toBeInTheDocument();
});

test('clear display when C button is clicked', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('C'));
  const displayElement = getByText(/0/i);
  expect(displayElement).toBeInTheDocument();
});



test('perform logarithm operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('log'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/1/i);
  expect(displayElement).toBeInTheDocument();
});

test('perform power operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('^'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/8/i);
  expect(displayElement).toBeInTheDocument();
});





test('perform square root operation correctly', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('√'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/3/i); // Square root of 9 is 3
  expect(displayElement).toBeInTheDocument();
});
