/*
     Title: Actions for ProductionProcess
     Description: Actions for ProductionProcess
     Author: Iqbal Hossain
     Date: 06-January-2022
     Modified: 06-January-2022
*/

import { baseAxios } from 'services';
import { PRODUCTION_PROCESS_API } from 'services/api-end-points/production/v1';
import { confirmDialog } from 'utility/custom/ConfirmDialog';
import { notify } from 'utility/custom/notifications';
import { confirmObj } from 'utility/enums';
import {
  ADD_PRODUCTION_PROCESS,
  DELETE_PRODUCTION_PROCESS,
  DELETE_PRODUCTION_PROCESS_BY_RANGE,
  DROP_DOWN_PRODUCTION_PROCESS,
  FETCH_PRODUCTION_PROCESS,
  FETCH_PRODUCTION_PROCESS_BY_ID,
  FETCH_PRODUCTION_PROCESS_BY_QUERY,
  TOGGLE_PRODUCTION_PROCESS_SIDEBAR,
  UPDATE_PRODUCTION_PROCESS
} from './actionType';

export const fetchProductionProcess = () => async dispatch => {
  const response = await baseAxios.get(`${PRODUCTION_PROCESS_API.fetch_all}`);
  dispatch({
    type: FETCH_PRODUCTION_PROCESS,
    payload: response.data
  });
};

//Open Sidebar
export const toggleProductionProcessSidebar = condition => dispatch => {
  dispatch({
    type: TOGGLE_PRODUCTION_PROCESS_SIDEBAR,
    payload: condition
  });
};

//Get Data by Query
export const fetchProductionProcessesByQuery = params => {
  return async dispatch => {
    try {
      const res = await baseAxios.get(`${PRODUCTION_PROCESS_API.fetch_by_query}`, params);
      dispatch({
        type: FETCH_PRODUCTION_PROCESS_BY_QUERY,
        payload: {
          productionProcesses: res.data.data,
          totalRecords: res.data.totalRecords,
          params
        }
      });
    } catch (error) {
      notify('error', 'Something went wrong!! Please try again');
    }
  };
};

//Get by id
export const fetchProductionProcessById = id => {
  return async dispatch => {
    try {
      const res = await baseAxios.get(`${PRODUCTION_PROCESS_API.fetch_by_id}`, { id });
      dispatch({
        type: FETCH_PRODUCTION_PROCESS_BY_ID,
        selectedItem: res.data ? res.data : null
      });
    } catch (error) {
      notify('error', 'Something went wrong!! Please try again');
    }
  };
};

/// Get All Without Query
export const getDropDownProductinProcess = () => {
  return async dispatch => {
    try {
      const res = await baseAxios.get(`${PRODUCTION_PROCESS_API.fetch_all}`);
      const productionProcessddl = res.data.map(item => ({
        value: item.id,
        label: item.productionProcessName
      }));
      dispatch({
        type: DROP_DOWN_PRODUCTION_PROCESS,
        dropDownItems: productionProcessddl
      });
    } catch (err) {
      notify('error', 'Something went wrong!! Please try again');
    }
  };
};

//Add new
export const addProductionProcess = (data, params) => {
  return async dispatch => {
    try {
      const res = await baseAxios.post(`${PRODUCTION_PROCESS_API.add}`, data);
      dispatch({
        type: ADD_PRODUCTION_PROCESS,
        payload: data
      });
      notify('success', res.data.message);
      dispatch(fetchProductionProcessesByQuery(params));
    } catch (err) {
      notify('error', 'Something went wrong!!! Please try again');
    }
  };
};

//Update
export const updateProductionProcess = (data, params) => {
  return async dispatch => {
    try {
      const res = await baseAxios.post(`${PRODUCTION_PROCESS_API.update}`, { data });
      dispatch({
        type: UPDATE_PRODUCTION_PROCESS,
        payload: data
      });
      notify('success', res.data.message);
      dispatch(fetchProductionProcessesByQuery(params));
    } catch (err) {
      notify('error', 'Something went wrong!!! Please try again');
    }
  };
};

//Delete
export const deleteProductionProcess = id => {
  return async dispatch => {
    const e = await confirmDialog(confirmObj);
    if (e.isConfirmed) {
      try {
        const res = await baseAxios.delete(`${PRODUCTION_PROCESS_API.delete}`, { id });
        dispatch({
          type: DELETE_PRODUCTION_PROCESS,
          payload: res.data.data
        });
        notify('success', res.data.message);
      } catch (err) {
        notify('error', 'Something went wrong!!! Please tyr again');
      }
    }
  };
};

//Delete by Range
export const deleteProductionProcessByRange = ids => {
  return async dispatch => {
    const e = await confirmDialog(confirmObj);
    if (e.isConfirmed) {
      try {
        const res = await baseAxios.delete(`${PRODUCTION_PROCESS_API.delete_by_range}`, { ids });
        dispatch({
          type: DELETE_PRODUCTION_PROCESS_BY_RANGE,
          payload: res.data.data
        });
        notify('success', res.data.message);
      } catch (err) {
        notify('error', 'Something went wrong!!! Please tyr again');
      }
    }
  };
};

/** Change Log
 * 09-Jan-2022(Iqbal): Create Function/Method deleteProductionProcessByRange, deleteProductionProcess, updateProductionProcess, addProductionProcess, fetchProductionProcesssByQuery, fetchProductionProcessById
 */
