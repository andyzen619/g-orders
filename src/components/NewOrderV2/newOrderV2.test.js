/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import FirebaseContextProvider from '../../context/FirebaseContext';
import App from '../App/App';

const setUp = async () => {
  render(
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>,
  );

  const newOrderButton = screen.getByText(/New Order/i);
  await fireEvent.click(newOrderButton);
};

test('Should be able to create an order.', async () => {
  setUp();

  expect(await screen.findByText('4 Combination Plate')).toBeInTheDocument();
  const fourComboAddButton = screen.getByTestId('fourComboAddButton');
  expect(fourComboAddButton).toBeInTheDocument();
  const fourComboRemoveButton = screen.getByTestId('fourComboRemoveButton');
  expect(fourComboRemoveButton).toBeInTheDocument();

  await fireEvent.click(fourComboAddButton);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByTestId('order-sub-total')).toHaveTextContent('8.95');
  expect(screen.getByTestId('order-total')).toHaveTextContent('10.11');

  await fireEvent.click(fourComboRemoveButton);
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByTestId('order-sub-total')).toHaveTextContent('0.00');
  expect(screen.getByTestId('order-total')).toHaveTextContent('0.00');

  const timeInput = screen.getByTestId('order-time-input');
  expect(timeInput).toBeInTheDocument();
  fireEvent.change(timeInput, {target: {value: '3:00'}});

  const setTimeButton = screen.getByText(/Set Time/i);
  expect(setTimeButton).toBeInTheDocument();
  await fireEvent.click(setTimeButton);

  expect(screen.getByText(/3:00 pm/i)).toBeInTheDocument();
});
