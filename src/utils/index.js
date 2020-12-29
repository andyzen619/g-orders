/**
 * Calculates order.
 * @param {*} order The original order.
 * @return {object} The transformed order with new total.
 */
export const calculateOrder = (order) => {
  let orderTotal = 0;
  Object.entries(order).forEach(([key, value]) => {
    if (!['total', 'time'].includes(key)) {
      const {price, numberOfItems} = value;

      // eslint-disable-next-line no-unused-vars
      const [_, number] = price.split('$');
      orderTotal += parseFloat(number * numberOfItems);
    }
  });

  return {...order, total: orderTotal.toFixed(2)};
};
