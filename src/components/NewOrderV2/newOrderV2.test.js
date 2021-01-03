/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {render, screen, fireEvent, findByText} from '@testing-library/react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import FirebaseContextProvider from '../../context/FirebaseContext';
import App from '../App/App';

test('Should be able to add too and remove from the same item.', async () => {
  render(
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>);

  const newOrderButton = screen.getByText(/New Order/i);

  await fireEvent.click(newOrderButton);

  expect(await findByText(/4 Combinations Plate/i)).toBeInTheDocument();

  const fourComboAddButton = screen.getByTestId('fourComboAddButton');
  expect(fourComboAddButton).toBeInTheDocument();

  // const fourComboRemoveButton = screen.getByTestId('fourComboRemoveButton');
  // expect(fourComboRemoveButton).toBeInTheDocument();

  // fireEvent.click(fourComboAddButton);
});
