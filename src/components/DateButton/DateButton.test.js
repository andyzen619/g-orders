// Date Button Tests
import React from 'react';
import {render, screen} from '@testing-library/react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import DateButton from '.';

test('renders current date', async () => {
  render(<DateButton/>);
  expect(onScreenDate).toBeInTheDocument();
});
