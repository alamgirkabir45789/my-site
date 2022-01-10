/*
     Title: Reducers for ZONE
     Description: Reducers for ZONE
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import {
  ADD_ZONE,
  DELETE_ZONE,
  DELETE_ZONE_BY_RANGE,
  FETCH_ZONE,
  FETCH_ZONE_BY_ID,
  FETCH_ZONE_BY_QUERY,
  TOGGLE_ZONE_SIDEBAR,
  UPDATE_ZONE
} from './actionType';

const initialState = {
  zones: [],
  queryData: [],
  total: 1,
  params: {},
  selectedZone: null,
  isOpenZoneSidebar: false
};

export const ZoneReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ZONE:
      return { ...state, zones: payload };
    case TOGGLE_ZONE_SIDEBAR:
      return { ...state, isOpenZoneSidebar: payload };
    case FETCH_ZONE_BY_ID:
      return { ...state, selectedZone: action.selectedZone };
    case FETCH_ZONE_BY_QUERY:
      return {
        ...state,
        zones: payload.zones,
        total: payload.totalRecords,
        params: action.params
      };
    case ADD_ZONE:
      return { ...state, total: state.total + 1 };
    case UPDATE_ZONE:
      return { ...state, total: state.total + 1 };
    case DELETE_ZONE:
      return { ...state };
    case DELETE_ZONE_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};

/** Change Log
 * 09-Jan-2022(Iqbal):Add TOGGLE_ZONE_SIDEBAR, FETCH_ZONE_BY_QUERY, ADD_ZONE, DELETE_ZONE, FETCH_ZONE_BY_ID, UPDATE_ZONE, DELETE_ZONE_BY_RANGE
 */
