/* eslint-disable no-unused-vars */

import {ORDER_SIZES} from '../constants';
/**
 * Calculates order.
 * @param {*} order The original order.
 * @return {object} The transformed order with new total.
 */
export const calculateOrder = (order) => {
  let orderTotal = 0;
  Object.entries(order).forEach(([key, value]) => {
    if (![
      'total', 'time', 'totalWithTax', 'size', 'phoneNumber',
    ].includes(key)) {
      const {price, numberOfItems} = value;

      // eslint-disable-next-line no-unused-vars
      const [_, number] = price.split('$');
      orderTotal += parseFloat(number * numberOfItems);
    }
  });

  return {...order, total: orderTotal.toFixed(2)};
};

export const generateTimeObj = (time, date) => {
  try {
    const [hour, minute] = time.split(':');
    const startDate = date;

    startDate.hour(12 + Number(hour));
    startDate.minute(Number(minute));

    return startDate;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const calculateSize = (totalWithTax) => {
  const number = Number(totalWithTax);
  if (number < 20) {
    return ORDER_SIZES.SMALL;
  }
  if (number < 40) {
    return ORDER_SIZES.MEDIUM;
  }
  if (number < 60) {
    return ORDER_SIZES.LARGE;
  }
  return ORDER_SIZES.EXTRA_LARGE;
};

