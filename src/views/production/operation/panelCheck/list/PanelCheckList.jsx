/**
 * Title: Panel Check Edit Form
 * Description: Panel Check Edit Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 05-January-2022
 */

import React, { Fragment, useEffect, useState } from 'react';
import { Maximize2 } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Collapse,
  Input,
  Label,
  Row
} from 'reactstrap';
import CustomPagination from 'utility/custom/production/CustomPagination';
import ResizableTable from 'utility/custom/ResizableTable';
import TableCustomerHeader from 'utility/custom/TableCustomerHeader';
import { fetchPanelChecksByQuery } from '../store/actions';
import PanelCheckBundleDetails from './PanelCheckBundleDetails';

const PanelCheckListPage = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(({ panelCheckReducer }) => panelCheckReducer);
  //#region States
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  //#endregion

  //#region Effects
  useEffect(() => {
    dispatch(fetchPanelChecksByQuery({ page: currentPage, rowsPerPage }));
  }, [dispatch, rowsPerPage, currentPage]);
  //#endregion

  //#region Events

  // Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value);
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val);
    dispatch(fetchPanelChecksByQuery({ q: val, rowsPerPage, page: currentPage }));
  };

  const handleSort = (column, direction) => {
    const { selector } = column;
    dispatch(fetchPanelChecksByQuery({ sortedBy: direction, sortedColumn: selector }));
  };
  //#endregion

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="12">
              <Input
                id="search-item"
                className="w-100 mt-50"
                placeholder="Search"
                type="text"
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag="h2">Panel Check</CardTitle>
        </CardHeader>
        <TableCustomerHeader
          handlePerPage={handlePerPage}
          rowsPerPage={rowsPerPage}
          searchTerm={searchTerm}
        ></TableCustomerHeader>

        <div className="border rounded rounded-3 p-1">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="panel-Check-details-table">
                <ResizableTable
                  mainClass="panelCheckTable"
                  tableId="panelCheckTableId"
                  className="panel-check-table"
                  size="sm"
                  responsive={true}
                  bordered={true}
                  onSort={handleSort}
                >
                  <thead className="thead-secondary">
                    <tr className="text-center">
                      <th style={{ minWidth: '4px' }}>
                        <strong>#</strong>
                      </th>
                      <th>
                        <strong>Cut Plan No</strong>
                      </th>
                      <th>
                        <strong>Cut No</strong>
                      </th>
                      <th>
                        <strong>Combo No</strong>
                      </th>
                      <th>
                        <strong>Size</strong>
                      </th>
                      <th>
                        <strong>Color</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {items?.map(panelCheck => (
                      <Fragment key={panelCheck.id + panelCheck.id}>
                        <tr key={panelCheck.id}>
                          <td style={{ minWidth: '4px' }}>
                            <Button.Ripple
                              for="collapseId"
                              tag={Label}
                              onClick={() => {
                                setIsOpen(!isOpen);
                              }}
                              className="btn-icon"
                              color="flat-primary"
                            >
                              <Maximize2 id="collapseId" size={15} color="#7367f0" />
                            </Button.Ripple>
                          </td>
                          <td>
                            <Label className="text-dark font-weight-bold" for="styleNo">
                              {panelCheck.cutPlanNo}
                            </Label>
                          </td>
                          <td>
                            <Label className="text-dark font-weight-bold" for="deliveryDestination">
                              {panelCheck.cutNo}
                            </Label>
                          </td>

                          <td>
                            <Label className="text-dark font-weight-bold" for="shipmentMode">
                              {panelCheck.comboNo}
                            </Label>
                          </td>
                          <td>
                            <Label className="text-dark font-weight-bold" for="orderQuantity">
                              {panelCheck.size}
                            </Label>
                          </td>

                          <td>
                            <Label className="text-dark font-weight-bold" for="orderUOM">
                              {panelCheck.color}
                            </Label>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </ResizableTable>
              </div>
            </Col>
          </Row>
        </div>

        <CustomPagination
          count={Number(Math.ceil(total / rowsPerPage))}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Card>

      <Collapse isOpen={isOpen}>
        <PanelCheckBundleDetails />
      </Collapse>

      {/* {selectedItem !== null ? (
        <PanelCheckBundleDetails isOpen={isOpen} />
      ) : selectedItem == null ? (
        <div>
          <Label className="text-dark font-weight-bold">There have no record</Label>
        </div>
      ) : null} */}
    </div>
  );
};

export default PanelCheckListPage;
