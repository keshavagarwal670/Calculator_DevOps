import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator with initial display of 0', () => {
  const { getByDisplayValue } = render(<App />);
  const display = getByDisplayValue('0');
  expect(display).toBeInTheDocument();
});

test('perform addition operation', () => {
  const { getByText, getByDisplayValue } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const display = getByDisplayValue('3');
  expect(display).toBeInTheDocument();
});

test('perform subtraction operation', () => {
  const { getByText, getByDisplayValue } = render(<App />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const display = getByDisplayValue('2');
  expect(display).toBeInTheDocument();
});

test('perform multiplication operation', () => {
  const { getByText, getByDisplayValue } = render(<App />);
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const display = getByDisplayValue('12');
  expect(display).toBeInTheDocument();
});

test('perform division operation', () => {
  const { getByText, getByDisplayValue } = render(<App />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const display = getByDisplayValue('3');
  expect(display).toBeInTheDocument();
});




test('clear display', () => {
  const { getByText, getByDisplayValue } = render(<App />);
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('C'));
  const display = getByDisplayValue('0');
  expect(display).toBeInTheDocument();
});
