/*
     Title: Sample Type Mock
     Description: Sample Type Mock
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import { paginateArray } from '@fake-db/utils';
import { SAMPLE_TYPE_API } from 'services/api-end-points/production/v1';
import { randomIdGenerator } from 'utility/Utils';
import mock from '../../mock';

const data = [
  {
    id: 1,
    sampleTypeName: 'Shade band',
    description: 'This is Shade band',
    status: 'active'
  },
  {
    id: 2,
    sampleTypeName: 'Poly Approval',
    description: 'This is Poly Approval',
    status: 'active'
  },
  {
    id: 3,
    sampleTypeName: 'Shipment Ref.',
    description: 'This is Shipment Ref.',
    status: 'inactive'
  }
];

//GET ALL DATA
mock.onGet(`${SAMPLE_TYPE_API.fetch_all}`).reply(200, data);

//POST: Add new
mock.onPost(`${SAMPLE_TYPE_API.add}`).reply(config => {
  const sampleType = JSON.parse(config.data);
  sampleType.id = randomIdGenerator();
  data.unshift(sampleType);
  return [201, { sampleType }];
});

//POST: update
mock.onPost(`${SAMPLE_TYPE_API.update}`).reply(config => {
  const updateSampleType = JSON.parse(config.data).sampleType;
  updateSampleType.id = Number(updateSampleType.id);
  const sampleType = data.find(e => e.id === Number(updateSampleType.id));
  Object.assign(sampleType, updateSampleType);
  return [200, { sampleType }];
});

//GET: get single
mock.onGet(`${SAMPLE_TYPE_API.fetch_by_id}`).reply(config => {
  const { id } = config;
  const sampleType = data.find(e => e.id === id);
  return [200, sampleType, { succeeded: true }];
});

//GET: get by query
mock.onGet(`${SAMPLE_TYPE_API.fetch_by_query}`).reply(config => {
  const { q = '', rowsPerPage = 10, page = 1, status = null } = config;
  const queryLowered = q.toLowerCase();
  const filteredData = data.filter(
    sampleType =>
      sampleType.sampleTypeName.toLowerCase().includes(queryLowered) ||
      sampleType.status === (status === '' ? sampleType.status : status)
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
mock.onDelete(`${SAMPLE_TYPE_API.delete}`).reply(config => {
  let sampleTypeId = config.id;
  sampleTypeId = Number(sampleTypeId);
  const sampleTypeIndex = data.findIndex(sampleType => sampleType.id === sampleTypeId);
  data.splice(sampleTypeIndex, 1);
  return [200];
});

// DELETE: Deletes  Range
mock.onDelete(`${SAMPLE_TYPE_API.delete_by_range}`).reply(config => {
  // Get id from URL
  const sampleTypeIds = config.ids;
  for (let index = 0; index < sampleTypeIds.length; index++) {
    const id = sampleTypeIds[index];
    const sampleTypeIndex = data.findIndex(sampleType => sampleType.id === id);
    data.splice(sampleTypeIndex, 1);
  }
  return [200];
});
