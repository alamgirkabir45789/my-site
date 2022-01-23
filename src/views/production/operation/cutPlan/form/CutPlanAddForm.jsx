/**
 * Title: Cut Plan Add Form
 * Description: Cut Plan Add Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 23-January-2022
 */

import ActionMenu from 'layouts/components/menu/action-menu';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { Maximize2, Minimize2, MoreVertical } from 'react-feather';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  Table
} from 'reactstrap';
import { randomIdGenerator, selectThemeColors } from 'utility/Utils';
import classes from '../styles/CutPlanAddForm.module.scss';

const dropDownStyle = [
  { value: 'AV56567', label: 'AV56567' },
  { value: 'AV1873', label: 'AV1873' },
  { value: 'M7825', label: 'M7825' }
];

const CutPlanAddForm = () => {
  const { register, errors, handleSubmit } = useForm();

  //#region State
  const [style, setStyle] = useState(null);
  const [orderDetails, setOrderDetails] = useState([
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO101',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 5000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3000
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO102',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 3500,
          extra: 2,
          withExtra: 3570,
          previousQty: 1200,
          LayCount: 200,
          totalQty: 1200,
          balance: 1170
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3500,
          extra: 0,
          withExtra: 3500,
          previousQty: 1200,
          LayCount: 0,
          totalQty: 0,
          balance: 2300
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO103',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3001
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO104',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3002
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO105',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3003
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO106',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3003
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO107',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3004
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO108',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 5000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3005
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO109',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3006
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO110',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3007
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO111',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3008
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO012',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3009
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO113',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3010
        }
      ]
    },
    {
      fieldId: randomIdGenerator(),
      poNo: 'PO114',
      destination: 'China',
      inspectionDate: moment(new Date()).format('yy-MM-DD'),
      shipmentMode: 'Air',
      shipmentDate: moment(new Date()).format('yy-MM-DD'),
      orderQuantity: 7000,
      orderUOM: 'pc',
      excessQuantity: 0,
      wastageQuantity: 0,
      isOpen: false,
      poDetails: [
        {
          fieldId: randomIdGenerator(),
          color: 'Red',
          orderQuantity: 2000,
          extra: 2,
          withExtra: 2040,
          previousQty: 0,
          LayCount: 200,
          totalQty: 1200,
          balance: 840
        },
        {
          fieldId: randomIdGenerator(),
          color: 'Green',
          orderQuantity: 3000,
          extra: 0,
          withExtra: 3000,
          previousQty: 0,
          LayCount: 0,
          totalQty: 0,
          balance: 3011
        }
      ]
    }
  ]);
  const togglePoDetails = idx => {
    const _orderDetails = [...orderDetails];
    const clickedItem = _orderDetails[idx];
    clickedItem.isOpen = !clickedItem.isOpen;
    _orderDetails[idx] = clickedItem;
    setOrderDetails(_orderDetails);
  };
  //#endregion

  return (
    <div>
      <Card className="p-1 mt-3">
        <CardBody>
          <Form
            onSubmit={() => {
              handleSubmit;
            }}
          >
            <ActionMenu title="New Cut Plan">
              <NavItem className="mr-1">
                <NavLink tag={Button} size="sm" color="primary" type="submit">
                  Save
                </NavLink>
              </NavItem>
              <NavItem className="mr-1">
                <NavLink tag={Button} size="sm" color="secondary">
                  Cancel
                </NavLink>
              </NavItem>
            </ActionMenu>
            <Row>
              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <Row className="border rounded rounded-3 mr-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1">
                    <Badge color="primary">{`Master Info`}</Badge>
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="cutPlanNo">
                      Cut Plan No
                    </Label>
                    <Input
                      id="cutPlanNo"
                      type="text"
                      name="cutPlanNo"
                      placeholder="Cut Plan No"
                      innerRef={register({ required: true })}
                      invalid={errors.cutPlanNo && true}
                    />
                    {errors && errors.cutPlanNo && (
                      <FormFeedback>Cut Plan No is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="startDate">
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="time"
                      name="startDate"
                      placeholder="Start Date"
                      innerRef={register({ required: true })}
                      invalid={errors.startDate && true}
                    />
                    {errors && errors.startDate && (
                      <FormFeedback>Start Date is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="style">
                      Style
                    </Label>
                    <Select
                      id="buyerName"
                      isSearchable
                      bsSize="sm"
                      isClearable
                      theme={selectThemeColors}
                      options={dropDownStyle}
                      classNamePrefix="select"
                      value={style}
                      onChange={data => setStyle(data)}
                      innerRef={register({ required: true })}
                    />

                    {errors && errors.style && <FormFeedback>Style is required!</FormFeedback>}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="styleCategory">
                      Style Category
                    </Label>
                    <Input
                      id="styleCategory"
                      type="text"
                      name="styleCategory"
                      placeholder="Style Category"
                      disabled
                      innerRef={register({ required: true })}
                      invalid={errors.styleCategory && true}
                    />
                    {errors && errors.styleCategory && (
                      <FormFeedback>Style Category is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="buyerName">
                      Buyer Name
                    </Label>
                    <Input
                      id="buyerName"
                      type="text"
                      name="buyerName"
                      placeholder="Buyer Name"
                      disabled
                      innerRef={register({ required: true })}
                      invalid={errors.buyerName && true}
                    />
                    {errors && errors.buyerName && (
                      <FormFeedback>Buyer Name is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="totalQty">
                      Total Quanity
                    </Label>
                    <Input
                      id="totalQty"
                      type="text"
                      name="totalQty"
                      placeholder="Total Quanity"
                      innerRef={register({ required: true })}
                      invalid={errors.totalQty && true}
                    />
                    {errors && errors.totalQty && (
                      <FormFeedback>Total Quanity is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="totalLayCount">
                      Total Lay Count
                    </Label>
                    <Input
                      id="totalLayCount"
                      type="text"
                      name="totalLayCount"
                      placeholder="Total Lay Count"
                      innerRef={register({ required: true })}
                      invalid={errors.totalLayCount && true}
                    />
                    {errors && errors.totalLayCount && (
                      <FormFeedback>Total Lay Count is required!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="layPerCut">
                      Lay Per Cut
                    </Label>
                    <Input
                      id="layPerCut"
                      type="text"
                      name="layPerCut"
                      placeholder="Lay Per Cut"
                      innerRef={register({ required: true })}
                      invalid={errors.layPerCut && true}
                    />
                    {errors && errors.layPerCut && (
                      <FormFeedback>Lay Per Cut is required!</FormFeedback>
                    )}
                  </FormGroup>
                </Row>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6" xl="6">
                <Row className="border rounded rounded-3">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1">
                    <Badge color="primary">{`Size Wise Ratio`}</Badge>
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input type="button" value="Size" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input type="button" value="Quantity" disabled />
                  </FormGroup>

                  <FormGroup tag={Col} xs="6">
                    <Input type="text" value="S" className="text-center" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input
                      id="size"
                      type="text"
                      name="size"
                      placeholder="1"
                      innerRef={register({ required: true })}
                      invalid={errors.size && true}
                    />
                    {errors && errors.size && <FormFeedback>Size is required!</FormFeedback>}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input type="text" value="M" className="text-center" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input
                      id="size"
                      type="text"
                      name="size"
                      placeholder="2"
                      innerRef={register({ required: true })}
                      invalid={errors.size && true}
                    />
                    {errors && errors.size && <FormFeedback>Size is required!</FormFeedback>}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input type="text" value="L" className="text-center" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input
                      id="size"
                      type="text"
                      name="size"
                      placeholder="3"
                      innerRef={register({ required: true })}
                      invalid={errors.size && true}
                    />
                    {errors && errors.size && <FormFeedback>Size is required!</FormFeedback>}
                  </FormGroup>

                  <FormGroup tag={Col} xs="6">
                    <Input type="text" value="Total" className="text-center" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Input type="text" value="6" className="text-center" disabled />
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="width">
                      Width
                    </Label>
                    <Input
                      id="width"
                      type="text"
                      name="width"
                      placeholder="Width"
                      innerRef={register({ required: true })}
                      invalid={errors.width && true}
                    />
                    {errors && errors.width && <FormFeedback>Width is required!</FormFeedback>}
                  </FormGroup>
                  <FormGroup tag={Col} xs="6">
                    <Label className="text-dark font-weight-bold" for="length">
                      Length
                    </Label>
                    <Input
                      id="length"
                      type="text"
                      name="length"
                      placeholder="Length"
                      innerRef={register({ required: true })}
                      invalid={errors.length && true}
                    />
                    {errors && errors.length && (
                      <FormFeedback>Length Cut is required!</FormFeedback>
                    )}
                  </FormGroup>
                </Row>
              </Col>
              <hr />
            </Row>

            <Row className="border rounded rounded-3 mt-1">
              <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1">
                <Badge color="primary">{`PO Details`}</Badge>
              </FormGroup>
              <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Table className={classes.poDetailsTable} size="sm" responsive>
                  <thead className={`thead-dark table-bordered ${classes.stickyTableHead}`}>
                    <tr className="text-center">
                      <th style={{ minWidth: '4px' }}>
                        <strong>#</strong>
                      </th>
                      <th>
                        <strong>PO No.</strong>
                      </th>
                      <th>
                        <strong>Destination</strong>
                      </th>
                      <th>
                        <strong>Inspection Date</strong>
                      </th>
                      <th>
                        <strong>Shipment Mode</strong>
                      </th>
                      <th>
                        <strong>Shipment Date</strong>
                      </th>

                      <th>
                        <strong>Order Qty</strong>
                      </th>
                      <th>
                        <strong>Order UOM</strong>
                      </th>

                      <th>
                        <strong>Excess Qty</strong>
                      </th>
                      <th>
                        <strong>Wastage Qty</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {orderDetails.map((i, idx) => (
                      <Fragment key={i.fieldId + i.fieldId}>
                        <tr key={i.fieldId}>
                          <td style={{ minWidth: '4px' }}>
                            <Button
                              for="collapseId"
                              tag={Label}
                              onClick={() => togglePoDetails(idx)}
                              className="btn-sm"
                              color="flat-primary"
                            >
                              {i.isOpen ? (
                                <Minimize2 size={15} color="#57C69D" />
                              ) : (
                                <Maximize2 id="collapseId" size={15} color="#7367f0" />
                              )}
                            </Button>
                          </td>
                          <td>{i.poNo}</td>
                          <td>{i.destination}</td>
                          <td>{i.inspectionDate}</td>
                          <td>{i.shipmentMode}</td>
                          <td>{i.shipmentDate}</td>
                          <td>{i.orderQuantity}</td>
                          <td>{i.orderUOM}</td>
                          <td>{i.excessQuantity}</td>
                          <td>{i.wastageQuantity}</td>
                        </tr>
                        <tr>
                          <td
                            colSpan={10}
                            style={{ padding: '2px 10px !important', backgroundColor: '#fff' }}
                          >
                            <Collapse isOpen={i.isOpen}>
                              <Table className={classes.childTable}>
                                <thead className="thead-light table-bordered">
                                  <tr>
                                    <th></th>
                                    <th>Color</th>
                                    <th>Order Qty</th>
                                    <th>Extra</th>
                                    <th>With Extra</th>
                                    <th>Previous</th>
                                    <th>Lay Count</th>
                                    <th>Total Qty</th>
                                    <th>RC</th>
                                    <th>Balance</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {i.poDetails.map(pod => (
                                    <tr key={pod.fieldId}>
                                      <td></td>
                                      <td>{pod.color}</td>
                                      <td>{pod.orderQuantity}</td>
                                      <td>{pod.extra}</td>
                                      <td>{pod.withExtra}</td>
                                      <td>{pod.previousQty}</td>
                                      <td>{pod.LayCount}</td>
                                      <td>{pod.totalQty}</td>
                                      <td>
                                        <MoreVertical color="#7367F0" />
                                      </td>
                                      <td>{pod.balance}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </Collapse>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </Table>
              </FormGroup>
              <hr />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CutPlanAddForm;

/**
 * 23-Jan-2022 : add collapsible table in Cut plan create form
 **/
