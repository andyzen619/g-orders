import React, {useReducer, createContext} from 'react';

import {ORDER_ACTION_TYPES} from '../constants';

const orderReducer = (state, action) => {
  switch (action.type) {
    case ORDER_ACTION_TYPES.ADD_ITEM: {

    }
    case ORDER_ACTION_TYPES.REMOVE_ITEM: {

    }
    case ORDER_ACTION_TYPES.CLEAR_ORDER: {

    }
    default: {
      console.error('No such order action type: ', action.type);
    }
  }
};

