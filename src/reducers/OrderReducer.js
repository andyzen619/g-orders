/* eslint-disable no-unused-vars */
import {ORDER_ACTION_TYPES} from '../constants';
import {
  calculateOrder,
  calculateOrderTotal,
  calculateSize,
  generateTimeObj,
} from '../utils';

const OrderReducer = (order, action) => {
  switch (action.type) {
    case ORDER_ACTION_TYPES.CLEAR_ORDER: {
      return {total: '0.00', time: '', size: '', phoneNumber: ''};
    }
    case ORDER_ACTION_TYPES.ADD_ITEM: {
      const {item} = action;

      // add item
      const newOrder = order[item.name] ?
        {...order} :
        {...order, [item.name]: {...item, numberOfItems: 0}};
      newOrder[item.name].numberOfItems += 1;

      return {
        ...calculateOrder(newOrder),
        size: calculateSize(Number(newOrder.total)),
      };
    }
    case ORDER_ACTION_TYPES.REMOVE_ITEM: {
      const {itemToRemove} = action;
      const newOrder = {...order};

      if (newOrder[itemToRemove] && newOrder[itemToRemove].numberOfItems > 0) {
        newOrder[itemToRemove].numberOfItems -= 1;
        return {
          ...calculateOrder(newOrder),
          size: calculateSize(Number(order.total)),
        };
      }

      return order;
    }
    case ORDER_ACTION_TYPES.SET_TIME: {
      const {startDate} = action;
      return {
        ...order,
        time: generateTimeObj(order.time, startDate).format(''),
      };
    }
    case ORDER_ACTION_TYPES.UPDATE_TIME: {
      const {time} = action;
      return {...order, time};
    }
    case ORDER_ACTION_TYPES.UPDATE_PHONE_NUMBER: {
      const {phoneNumber} = action;
      return {...order, phoneNumber};
    }
    case ORDER_ACTION_TYPES.SET_ORDER: {
      const {currentOrder} = action;
      return {...currentOrder};
    }
    case ORDER_ACTION_TYPES.SET_TOTAL_WITH_TAX: {
      const {orderSubTotal} = action;

      const total = calculateOrderTotal(orderSubTotal);
      const newOrder = {...order, total};
      return newOrder;
    }
    default: {
      return state;
    }
  }
};

export default OrderReducer;
