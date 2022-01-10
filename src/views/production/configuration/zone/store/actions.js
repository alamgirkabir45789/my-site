/*
     Title: Actions for Zone
     Description: Actions for Zone
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import { baseAxios } from 'services';
import { ZONE_API } from 'services/api-end-points/production/v1';
import { confirmDialog } from 'utility/custom/ConfirmDialog';
import { notify } from 'utility/custom/notifications';
import { confirmObj } from 'utility/enums';
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

export const fetchZone = () => async dispatch => {
  const response = await baseAxios.get(`${ZONE_API.fetch_all}`);
  dispatch({
    type: FETCH_ZONE,
    payload: response.data
  });
};

//Open Sidebar
export const toggleZoneSidebar = condition => dispatch => {
  dispatch({
    type: TOGGLE_ZONE_SIDEBAR,
    payload: condition
  });
};

//Get Data by Query
export const fetchZonesByQuery = params => {
  return async dispatch => {
    await baseAxios.get(`${ZONE_API.fetch_by_query}`, params).then(response => {
      dispatch({
        type: FETCH_ZONE_BY_QUERY,
        payload: {
          zones: response.data.data,
          totalRecords: response.data.totalRecords,
          params
        }
      });
    });
  };
};

//Get by id
export const fetchZoneById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${ZONE_API.fetch_by_id}`, { id })
      .then(response => {
        dispatch({
          type: FETCH_ZONE_BY_ID,
          selectedZone: response.data ? response.data : null
        });
      })
      .catch(err => console.log(err));
  };
};

//Add new
export const addZone = (zone, params) => {
  return async dispatch => {
    await baseAxios
      .post(`${ZONE_API.add}`, zone)
      .then(() => {
        dispatch({
          type: ADD_ZONE,
          payload: zone
        });
        notify('success', 'The Zone added Successfully!');
        dispatch(fetchZonesByQuery(params));
      })
      .catch(err => console.log(err));
  };
};

//Update Zone
export const updateZone = (zone, params) => {
  return dispatch => {
    baseAxios.post(`${ZONE_API.update}`, { zone }).then(() => {
      dispatch({
        type: UPDATE_ZONE,
        payload: zone
      });
      notify('success', 'The Zone Updated Successfully!');
      dispatch(fetchZonesByQuery(params));
    });
  };
};

//Delete Zone
export const deleteZone = id => {
  return dispatch => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        await baseAxios
          .delete(`${ZONE_API.delete}`, { id })
          .then(() => {
            dispatch({
              type: DELETE_ZONE
            });
          })
          .then(() => {
            notify('success', 'Zone Deleted Successfully!');
            dispatch(fetchZone());
          });
      }
    });
  };
};

//Delete by Range
export const deleteZoneByRange = ids => {
  return dispatch => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${ZONE_API.delete_by_range}`, { ids })
          .then(() => {
            dispatch({
              type: DELETE_ZONE_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'Zones deleted Successfully!');
            dispatch(fetchZone());
          });
      }
    });
  };
};

/** Change Log
 * 09-Jan-2022(Iqbal): Create Function/Method deleteZoneByRange, deleteZone, updateZone, addZone, fetchZonesByQuery, fetchZoneById
 */
