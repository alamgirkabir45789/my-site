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
    await baseAxios.get(`${PRODUCTION_PROCESS_API.fetch_by_query}`, params).then(response => {
      dispatch({
        type: FETCH_PRODUCTION_PROCESS_BY_QUERY,
        payload: {
          productionProcesses: response.data.data,
          totalRecords: response.data.totalRecords,
          params
        }
      });
    });
  };
};

//Get by id
export const fetchProductionProcessById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${PRODUCTION_PROCESS_API.fetch_by_id}`, { id })
      .then(response => {
        dispatch({
          type: FETCH_PRODUCTION_PROCESS_BY_ID,
          selectedItem: response.data ? response.data : null
        });
      })
      .catch(err => console.log(err));
  };
};

//Add new
export const addProductionProcess = (pp, params) => {
  return async dispatch => {
    await baseAxios
      .post(`${PRODUCTION_PROCESS_API.add}`, pp)
      .then(() => {
        dispatch({
          type: ADD_PRODUCTION_PROCESS,
          payload: pp
        });
        notify('success', 'The Production Process added Successfully!');
        dispatch(fetchProductionProcessesByQuery(params));
      })
      .catch(err => console.log(err));
  };
};

//Update
export const updateProductionProcess = (pp, params) => {
  return dispatch => {
    baseAxios.post(`${PRODUCTION_PROCESS_API.update}`, { pp }).then(() => {
      dispatch({
        type: UPDATE_PRODUCTION_PROCESS,
        payload: pp
      });
      notify('success', 'The Production Process Updated Successfully!');
      dispatch(fetchProductionProcessesByQuery(params));
    });
  };
};

//Delete
export const deleteProductionProcess = id => {
  return dispatch => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        await baseAxios
          .delete(`${PRODUCTION_PROCESS_API.delete}`, { id })
          .then(() => {
            dispatch({
              type: DELETE_PRODUCTION_PROCESS
            });
          })
          .then(() => {
            notify('success', 'Production Process Deleted Successfully!');
            dispatch(fetchProductionProcess());
          });
      }
    });
  };
};

//Delete by Range
export const deleteProductionProcessByRange = ids => {
  return dispatch => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${PRODUCTION_PROCESS_API.delete_by_range}`, { ids })
          .then(() => {
            dispatch({
              type: DELETE_PRODUCTION_PROCESS_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'Production Processes deleted Successfully!');
            dispatch(fetchProductionProcess());
          });
      }
    });
  };
};

/** Change Log
 * 09-Jan-2022(Iqbal): Create Function/Method deleteProductionProcessByRange, deleteProductionProcess, updateProductionProcess, addProductionProcess, fetchProductionProcesssByQuery, fetchProductionProcessById
 */
