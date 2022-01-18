/*
     Title: Cut Plan Table Column
     startDate: Cut Plan Table Column
     Author: Iqbal Hossain
     Date: 18-January-2022
     Modified: 18-January-2022
*/

import React from 'react';
import { Edit, FileText, MoreVertical, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';
import { store } from 'redux/storeConfig/store';
import { deleteCutPlan } from '../store/actions';

const statusObj = {
  active: 'light-success',
  inactive: 'light-secondary'
};

export const cutPlanTableColumn = [
  {
    name: 'Cut Plan No',
    minWidth: '170px',
    selector: 'cutPlanNo',
    sortable: true,
    cell: row => row.cutPlanNo
  },
  {
    name: 'Start Date',
    minWidth: '150px',
    selector: 'startDate',
    sortable: true,
    cell: row => row.startDate
  },
  {
    name: 'Buyer',
    minWidth: '150px',
    selector: 'buyer',
    sortable: true,
    cell: row => row.buyer
  },
  {
    name: 'Style',
    minWidth: '150px',
    selector: 'style',
    sortable: true,
    cell: row => row.style
  },
  {
    name: 'Style Category',
    minWidth: '150px',
    selector: 'styleCategory',
    sortable: true,
    cell: row => row.styleCategory
  },
  {
    name: 'Total Lay',
    minWidth: '150px',
    selector: 'totalLay',
    sortable: true,
    cell: row => row.totalLay
  },
  {
    name: 'Total Quantity',
    minWidth: '150px',
    selector: 'totalQuantity',
    sortable: true,
    cell: row => row.totalQuantity
  },
  {
    name: 'Status',
    maxWidth: '120px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className="text-capitalize" color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    maxWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to={`item-details/${row.name}`} className="w-100">
            <FileText color="skyBlue" size={14} className="mr-50" />
            <span color="primary" className="align-middle">
              Details
            </span>
          </DropdownItem>
          <DropdownItem className="w-100" onClick={() => {}}>
            <Edit color="green" size={14} className="mr-50" />
            <span className="align-middle">Edit</span>
          </DropdownItem>
          <DropdownItem
            className="w-100"
            onClick={() => {
              store.dispatch(deleteCutPlan(row.id));
            }}
          >
            <Trash2 color="red" size={14} className="mr-50" />
            <span className="align-middle">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
];
