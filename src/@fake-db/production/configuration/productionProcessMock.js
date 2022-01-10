/*
     Title: Production Process Mock
     Description: Production Process Mock
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import { paginateArray } from '@fake-db/utils';
import { PRODUCTION_PROCESS_API } from 'services/api-end-points/production/v1';
import { randomIdGenerator } from 'utility/Utils';
import mock from '../../mock';

const data = [
  {
    id: 1,
    productionProcessName: 'Cutting',
    processType: 'Partial',
    description: 'This is Cutting',
    status: 'active'
  },
  {
    id: 2,
    productionProcessName: 'Print',
    processType: 'Complete',
    description: 'This is Print',
    status: 'active'
  },
  {
    id: 3,
    productionProcessName: 'Wash',
    processType: 'Partial',
    description: 'This is Wash',
    status: 'inactive'
  }
];

//GET ALL DATA
mock.onGet(`${PRODUCTION_PROCESS_API.fetch_all}`).reply(200, data);

//POST: Add new
mock.onPost(`${PRODUCTION_PROCESS_API.add}`).reply(config => {
  const productionProcess = JSON.parse(config.data);
  productionProcess.id = randomIdGenerator();
  data.unshift(productionProcess);
  return [201, { productionProcess }];
});

//POST: update
mock.onPost(`${PRODUCTION_PROCESS_API.update}`).reply(config => {
  const updatePP = JSON.parse(config.data).pp;
  updatePP.id = Number(updatePP.id);
  const productionProcess = data.find(e => e.id === Number(updatePP.id));
  Object.assign(productionProcess, updatePP);
  return [200, { productionProcess }];
});

//GET: get single
mock.onGet(`${PRODUCTION_PROCESS_API.fetch_by_id}`).reply(config => {
  const { id } = config;
  const productionProcess = data.find(e => e.id === id);
  return [200, productionProcess, { succeeded: true }];
});

//GET: get by query
mock.onGet(`${PRODUCTION_PROCESS_API.fetch_by_query}`).reply(config => {
  const { q = '', rowsPerPage = 10, page = 1, status = null } = config;
  const queryLowered = q.toLowerCase();
  const filteredData = data.filter(
    pp =>
      pp.productionProcessName.toLowerCase().includes(queryLowered) ||
      pp.status === (status === '' ? pp.status : status)
  );
  return [
    200,
    {
      data: paginateArray(data, rowsPerPage, page),
      totalRecords: filteredData.length,
      succeeded: true
    }
  ];
});

//DELETE: delete
mock.onDelete(`${PRODUCTION_PROCESS_API.delete}`).reply(config => {
  let productionProcessId = Number(config.id);
  const productionProcessIndex = data.findIndex(
    productionProcess => productionProcess.id === productionProcessId
  );
  data.splice(productionProcessIndex, 1);
  return [200];
});

// DELETE: Deletes  Range
mock.onDelete(`${PRODUCTION_PROCESS_API.delete_by_range}`).reply(config => {
  // Get id from URL
  const productionProcessIds = config.ids;
  for (let index = 0; index < productionProcessIds.length; index++) {
    const id = productionProcessIds[index];
    const productionProcessIndex = data.findIndex(productionProcess => productionProcess.id === id);
    data.splice(productionProcessIndex, 1);
  }
  return [200];
});
