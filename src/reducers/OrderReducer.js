import {ORDER_ACTION_TYPES} from '../constants';
import {calculateOrder, calculateSize} from '../utils';

const OrderReducer = (state, action) => {
  const newState = {...state};

  switch (action.type) {
    case ORDER_ACTION_TYPES.ADD_ITEM:
      const key = action.item.name;
        newState[key] ?
          newState[key] = {
            ...newState[key],
            numberOfItems: newState[key].numberOfItems ++,
          }:
          newState[key] = {...action.item, numberOfItems: 1};
      return calculateOrder(newState);

    case ORDER_ACTION_TYPES.REMOVE_ITEM:
      const toRemoveKey = action.toRemove;
      if (newState[toRemoveKey].numberOfItems > 0) {
        newState[toRemoveKey] = {
          ...newState[toRemoveKey],
          numberOfItems: newState[toRemoveKey].numberOfItems --,
        };
      } else {
        delete newState[toRemoveKey];
      }
      return calculateOrder(newState);

    case ORDER_ACTION_TYPES.SUBMIT_ORDER:
      const {
        newTime,
        newPhoneNumber,
        totalWithTax,
        id,
      } = action;

      const size = calculateSize(totalWithTax);
      return {
        ...state,
        totalWithTax: totalWithTax.toFixed(2),
        size,
        time: newTime,
        phoneNumber: newPhoneNumber,
        id,
      };

    case ORDER_ACTION_TYPES.CLEAR_ORDER:
      return {total: '0.00', time: '', size: '', phoneNumber: ''};

    default:
      return state;
  };
};

export default OrderReducer;
