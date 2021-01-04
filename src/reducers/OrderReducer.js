/* eslint-disable no-unused-vars */
import {ORDER_ACTION_TYPES} from '../constants';
import {calculateOrder, calculateSize, generateTimeObj} from '../utils';

const OrderReducer = (order, action) => {
  switch (action.type) {
    case ORDER_ACTION_TYPES.CLEAR_ORDER: {
      return {total: '0.00', time: '', size: '', phoneNumber: ''};
    }
    case ORDER_ACTION_TYPES.ADD_ITEM: {
      const {item} = action;
      const newOrder = {...order};

      if (newOrder[item.name]) {
        newOrder[item.name].numberOfItems ++;
      } else {
        newOrder[item.name] = {...item, numberOfItems: 1};
      }

      return {
        ...calculateOrder(newOrder),
        size: calculateSize(Number(newOrder.total)),
      };
    }
    case ORDER_ACTION_TYPES.REMOVE_ITEM: {
      const {itemToRemove} = action;
      const newOrder = {...order};

      if (newOrder[itemToRemove]) {
        if (newOrder[itemToRemove].numberOfItems > 0) {
          newOrder[itemToRemove].numberOfItems -= 1;
          return {
            ...calculateOrder(newOrder),
            size: calculateSize(Number(order.total)),
          };
        }
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
    default: {
      return state;
    }
  }
};

export default OrderReducer;
