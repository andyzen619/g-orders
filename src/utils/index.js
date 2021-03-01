/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import Fuse from 'fuse.js';
import moment from 'moment';

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
      'total', 'time', 'totalWithTax', 'size', 'phoneNumber', 'id',
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
    const startDate = moment(date);

    startDate.hour(12 + Number(hour));
    startDate.minute(Number(minute));

    return startDate.format('');
  } catch (error) {
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

// eslint-disable-next-line valid-jsdoc
/**
 * Flattens menu items and in an array.
 * @param {*} menuItems
 * @param {*} pattern
 * @param {*} greaterThanZero
 * @param {*} order
 */
export const flattenMenuItems = (menuItems, pattern, greaterThanZero, order) => {
  try {
    if (!menuItems) return [];
    if (!order) return [];
    const combinations = Object.values(menuItems.combinations);
    const dinners = Object.values(menuItems.dinners);
    const dishes = [];

    Object.values(menuItems.dishes).forEach((dishCategory) => {
      Object.values(dishCategory).forEach((dish) => {
        dishes.push(dish);
      });
    });
    const flattenedMenuItems = [...combinations, ...dinners, ...dishes];

    const options = {
      keys: [
        'name',
      ],
    };
    const fuse = new Fuse(
        flattenedMenuItems.map((menuItem) => ({
          ...menuItem,
          numberOfItems: order[menuItem.name]?
            order[menuItem.name].numberOfItems :
            '0'})),
        options);
    const result = fuse.search(pattern || ' ');

    if (greaterThanZero) {
      return result.filter(({item}) => item.numberOfItems > 0 )
          .map(({item}) => item);
    }
    return result.map(({item}) => item);
  } catch (error) {
    // console.error(error);
    return [];
  }
};

