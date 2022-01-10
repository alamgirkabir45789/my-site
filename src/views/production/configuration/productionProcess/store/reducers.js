/*
     Title: Reducers for PRODUCTION_PROCESS
     Description: Reducers for PRODUCTION_PROCESS
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import {
  ADD_PRODUCTION_PROCESS,
  DELETE_PRODUCTION_PROCESS,
  DELETE_PRODUCTION_PROCESS_BY_RANGE,
  FETCH_PRODUCTION_PROCESS,
  FETCH_PRODUCTION_PROCESS_BY_ID,
  FETCH_PRODUCTION_PROCESS_BY_QUERY,
  TOGGLE_PRODUCTION_PROCESS_SIDEBAR,
  UPDATE_PRODUCTION_PROCESS
} from './actionType';

const initialState = {
  productionProcesses: [],
  queryData: [],
  total: 1,
  params: {},
  selectedItem: null,
  isOpenSidebar: false
};

export const productionProcessReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTION_PROCESS:
      return { ...state, productionProcesses: payload };
    case TOGGLE_PRODUCTION_PROCESS_SIDEBAR:
      return { ...state, isOpenSidebar: payload };
    case FETCH_PRODUCTION_PROCESS_BY_ID:
      return { ...state, selectedItem: action.selectedItem };
    case FETCH_PRODUCTION_PROCESS_BY_QUERY:
      return {
        ...state,
        productionProcesses: payload.productionProcesses,
        total: payload.totalRecords,
        params: action.params
      };
    case ADD_PRODUCTION_PROCESS:
      return { ...state, total: state.total + 1 };
    case UPDATE_PRODUCTION_PROCESS:
      return { ...state, total: state.total + 1 };
    case DELETE_PRODUCTION_PROCESS:
      return { ...state };
    case DELETE_PRODUCTION_PROCESS_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};

/** Change Log
 * 08-Jan-2022(Iqbal):Add TOGGLE_PRODUCTION_PROCESS_SIDEBAR, FETCH_PRODUCTION_PROCESS_BY_QUERY, ADD_PRODUCTION_PROCESS, DELETE_PRODUCTION_PROCESS, FETCH_PRODUCTION_PROCESS_BY_ID, UPDATE_PRODUCTION_PROCESS, DELETE_PRODUCTION_PROCESS_BY_RANGE
 */
