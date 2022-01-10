/*
     Title: Zone Owner Info with Mock
     Description: Zone Owner Info with Mock
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import { paginateArray } from '@fake-db/utils';
import { ZONE_API } from 'services/api-end-points/production/v1';
import { randomIdGenerator } from 'utility/Utils';
import mock from '../../mock';

const data = [
  {
    id: 1,
    zoneOwnerName: 'S.M. Moin',
    employeeCode: 'E-101',
    phoneNumber: '0125465785',
    status: 'active'
  },
  {
    id: 2,
    zoneOwnerName: 'Md. Amzad Hossain',
    employeeCode: 'E-102',
    phoneNumber: '0125465785',
    status: 'inactive'
  },
  {
    id: 3,
    zoneOwnerName: 'Md. Rasel',
    employeeCode: 'E-103',
    phoneNumber: '0125465785',
    status: 'active'
  }
];

//GET ALL DATA
mock.onGet(`${ZONE_API.fetch_all}`).reply(200, data);

//POST: Add new
mock.onPost(`${ZONE_API.add}`).reply(config => {
  const zone = JSON.parse(config.data);
  zone.id = randomIdGenerator();
  data.unshift(zone);
  return [201, { zone }];
});

//POST: update
mock.onPost(`${ZONE_API.update}`).reply(config => {
  const updateZone = JSON.parse(config.data).zone;
  updateZone.id = Number(updateZone.id);
  const zone = data.find(e => e.id === Number(updateZone.id));
  Object.assign(zone, updateZone);
  return [200, { zone }];
});

//GET: get single
mock.onGet(`${ZONE_API.fetch_by_id}`).reply(config => {
  const { id } = config;
  const zone = data.find(e => e.id === id);
  return [200, zone, { succeeded: true }];
});

//GET: get by query
mock.onGet(`${ZONE_API.fetch_by_query}`).reply(config => {
  const { q = '', rowsPerPage = 10, page = 1, status = null } = config;
  const queryLowered = q.toLowerCase();
  const filteredData = data.filter(
    zone =>
      zone.zoneOwnerName.toLowerCase().includes(queryLowered) ||
      zone.status === (status === '' ? zone.status : status)
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
mock.onDelete(`${ZONE_API.delete}`).reply(config => {
  let zoneId = config.id;
  zoneId = Number(zoneId);
  const zoneIndex = data.findIndex(zone => zone.id === zoneId);
  data.splice(zoneIndex, 1);
  return [200];
});

// DELETE: Deletes  Range
mock.onDelete(`${ZONE_API.delete_by_range}`).reply(config => {
  // Get id from URL
  const zoneIds = config.ids;
  for (let index = 0; index < zoneIds.length; index++) {
    const id = zoneIds[index];
    const zoneIndex = data.findIndex(zone => zone.id === id);
    data.splice(zoneIndex, 1);
  }
  return [200];
});
