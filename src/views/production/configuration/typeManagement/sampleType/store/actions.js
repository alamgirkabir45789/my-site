/*
   Title: Action
   Description: Action
   Author: Iqbal Hossain
   Date: 05-January-2022
   Modified: 05-January-2022
*/

import { baseAxios } from 'services';
import { SAMPLE_TYPE_API } from 'services/api-end-points/production/v1';
import { confirmDialog } from 'utility/custom/ConfirmDialog';
import { notify } from 'utility/custom/notifications';
import { confirmObj } from 'utility/enums';
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

export const fetchSampleType = () => async dispatch => {
  const response = await baseAxios.get(`${SAMPLE_TYPE_API.fetch_all}`);
  dispatch({
    type: FETCH_SAMPLE_TYPE,
    payload: response.data
  });
};

//Open Sidebar
export const toggleSampleTypeSidebar = condition => dispatch => {
  dispatch({
    type: TOGGLE_SAMPLE_TYPE_SIDEBAR,
    payload: condition
  });
};

//Get Data by Query
export const fetchSampleTypesByQuery = params => {
  return async dispatch => {
    await baseAxios.get(`${SAMPLE_TYPE_API.fetch_by_query}`, params).then(response => {
      dispatch({
        type: FETCH_SAMPLE_TYPE_BY_QUERY,
        payload: {
          sampleTypes: response.data.data,
          totalRecords: response.data.totalRecords,
          params
        }
      });
    });
  };
};

//Get by id
export const fetchSampleTypeById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${SAMPLE_TYPE_API.fetch_by_id}`, { id })
      .then(response => {
        dispatch({
          type: FETCH_SAMPLE_TYPE_BY_ID,
          payload: {
            selectedSampleType: response.data ? response.data : null
          }
        });
      })
      .catch(err => console.log(err));
  };
};

//Add new
export const addSampleType = (sampleType, params) => {
  return async dispatch => {
    await baseAxios
      .post(`${SAMPLE_TYPE_API.add}`, sampleType)
      .then(() => {
        dispatch({
          type: ADD_SAMPLE_TYPE,
          payload: sampleType
        });
        notify('success', 'The Sample Type added Successfully!');
        dispatch(fetchSampleTypesByQuery(params));
      })
      .catch(err => console.log(err));
  };
};

//Update
export const updateSampleType = (sampleType, params) => {
  return dispatch => {
    baseAxios.post(`${SAMPLE_TYPE_API.update}`, { sampleType }).then(() => {
      dispatch({
        type: UPDATE_SAMPLE_TYPE,
        payload: sampleType
      });
      notify('success', 'The Sample Type Updated Successfully!');
      dispatch(fetchSampleTypesByQuery(params));
    });
  };
};

//Delete
export const deleteSampleType = id => {
  return dispatch => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        await baseAxios
          .delete(`${SAMPLE_TYPE_API.delete}`, { id })
          .then(() => {
            dispatch({
              type: DELETE_SAMPLE_TYPE
            });
          })
          .then(() => {
            notify('success', 'Sample Type Deleted Successfully!');
            dispatch(fetchSampleType());
          });
      }
    });
  };
};

//Delete by Range
export const deleteSampleTypeByRange = ids => {
  return dispatch => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${SAMPLE_TYPE_API.delete_by_range}`, { ids })
          .then(() => {
            dispatch({
              type: DELETE_SAMPLE_TYPE_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'Sample Types deleted Successfully!');
            dispatch(fetchSampleType());
          });
      }
    });
  };
};

/** Change Log
 * 09-Jan-2022(Iqbal): Create Function/Method deleteSampleTypeByRange, deleteSampleType, updateSampleType, addSampleType, fetchSampleTypesByQuery, fetchSampleTypeById
 */
