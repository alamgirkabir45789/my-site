/*
   Title: Reducers
   Description: Reducers
   Author: Iqbal Hossain
   Date: 05-January-2022
   Modified: 05-January-2022
*/

import {
  ADD_SAMPLE_TYPE,
  DELETE_SAMPLE_TYPE,
  DELETE_SAMPLE_TYPE_BY_RANGE,
  FETCH_SAMPLE_TYPE,
  FETCH_SAMPLE_TYPE_BY_ID,
  FETCH_SAMPLE_TYPE_BY_QUERY,
  TOGGLE_SAMPLE_TYPE_SIDEBAR,
  UPDATE_SAMPLE_TYPE
} from './actionType';

const initialState = {
  sampleTypes: [],
  queryData: [],
  total: 1,
  params: {},
  selectedSampleType: null,
  isOpenSampleTypeSidebar: false
};

export const SampleTypeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SAMPLE_TYPE:
      return { ...state, sampleTypes: payload };
    case TOGGLE_SAMPLE_TYPE_SIDEBAR:
      return { ...state, isOpenSampleTypeSidebar: payload };
    case FETCH_SAMPLE_TYPE_BY_ID:
      return { ...state, selectedSampleType: action.selectedSampleType };
    case FETCH_SAMPLE_TYPE_BY_QUERY:
      return {
        ...state,
        sampleTypes: payload.sampleTypes,
        total: payload.totalRecords,
        params: action.params
      };
    case ADD_SAMPLE_TYPE:
      return { ...state, total: state.total + 1 };
    case UPDATE_SAMPLE_TYPE:
      return { ...state, total: state.total + 1 };
    case DELETE_SAMPLE_TYPE:
      return { ...state };
    case DELETE_SAMPLE_TYPE_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};

/** Change Log
 * 09-Jan-2022(Iqbal):Add TOGGLE_SAMPLE_TYPE_SIDEBAR, FETCH_SAMPLE_TYPE_BY_QUERY, ADD_SAMPLE_TYPE, DELETE_SAMPLE_TYPE, FETCH_SAMPLE_TYPE_BY_ID, UPDATE_SAMPLE_TYPE, DELETE_SAMPLE_TYPE_BY_RANGE
 */