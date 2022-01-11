/*
     Title: Reducers for Line
     Description: Reducers for Line
     Author: Iqbal Hossain
     Date: 06-January-2022
     Modified: 06-January-2022
*/

import {
  ADD_CRITICAL_PROCESS,
  DELETE_CRITICAL_PROCESS,
  DELETE_CRITICAL_PROCESS_BY_RANGE,
  FETCH_CRITICAL_PROCESS,
  FETCH_CRITICAL_PROCESS_BY_ID,
  FETCH_CRITICAL_PROCESS_BY_QUERY,
  TOGGLE_CRITICAL_PROCESS_SIDEBAR,
  TOGGLE_CRITICAL_PROCESS_STATUS,
  UPDATE_CRITICAL_PROCESS
} from './actionType';

const initialState = {
  items: [],
  queryData: [],
  total: 1,
  params: {},
  selectedItem: null,
  isOpenSidebar: false
};

export const criticalProcessReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CRITICAL_PROCESS:
      return { ...state, items: payload };

    case TOGGLE_CRITICAL_PROCESS_SIDEBAR:
      return { ...state, isOpenSidebar: payload };

    case TOGGLE_CRITICAL_PROCESS_STATUS:
      return { ...state, selectedItem: { ...state.selectedItem, state: payload } };

    case FETCH_CRITICAL_PROCESS_BY_ID: {
      return { ...state, selectedItem: payload.selectedItem };
    }

    case FETCH_CRITICAL_PROCESS_BY_QUERY:
      return {
        ...state,
        items: payload.items,
        total: payload.totalRecords,
        params: action.params
      };

    case ADD_CRITICAL_PROCESS:
      return { ...state, total: state.total + 1 };

    case UPDATE_CRITICAL_PROCESS:
      return { ...state, total: state.total + 1 };

    case DELETE_CRITICAL_PROCESS:
      return { ...state, items: payload };

    case DELETE_CRITICAL_PROCESS_BY_RANGE:
      return { ...state, items: payload };

    default:
      return state;
  }
};

/** Change Log
 * 08-Jan-2022(Iqbal):Add TOGGLE_LINE_SIDEBAR, FETCH_LINE_BY_QUERY, ADD_LINE, DELETE_LINE, FETCH_LINE_BY_ID, UPDATE_LINE, DELETE_LINE_BY_RANGE
 */
