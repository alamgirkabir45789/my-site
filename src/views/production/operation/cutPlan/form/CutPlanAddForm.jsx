/*
   Title: Cut Plan Add Form
   Description: Cut Plan Add Form
   Author: Alamgir Kabir
   Date: 27-January-2022
   Modified: 27-January-2022
*/

import '@custom-styles/merchandising/others/custom-table.scss';
import ActionMenu from 'layouts/components/menu/action-menu';
import { Fragment, useState } from 'react';
import { Maximize2, Minimize2, MoreVertical } from 'react-feather';
import { useHistory } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import {
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  Table
} from 'reactstrap';
import { notify } from 'utility/custom/notifications';

const dropDownStyle = [
  {
    value: 'Style-01',
    label: 'Style-01'
  },
  { value: 'Style-02', label: 'Style-02' }
];

const CutPlanAddForm = () => {
  const { replace } = useHistory();

  const data = [
    {
      id: 1,
      poNo: 'PO101',
      destination: 'Chaina',
      inspectionDate: new Date().toLocaleDateString(),
      shipmentMode: 'Air',
      shipmentDate: new Date().toLocaleDateString(),
      orderQty: 5000,
      orderUOM: 'pc',
      excess: 2,
      wastage: 2,

      details: [
        {
          id: 101,
          color: 'Red',
          orderQty: 2000,
          extra: 0,
          withExtra: 2000,
          hasError: false,
          previous: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000
        },
        {
          id: 102,
          color: 'Red',
          orderQty: 2000,
          extra: 0,
          withExtra: 2000,
          hasError: false,

          previous: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000
        }
      ]
    },
    {
      id: 2,
      poNo: 'PO102',
      destination: 'Chaina',
      inspectionDate: new Date().toLocaleDateString(),
      shipmentMode: 'Air',
      shipmentDate: new Date().toLocaleDateString(),
      orderQty: 7000,
      orderUOM: 'pc',
      excess: 2,
      wastage: 2,
      details: [
        {
          id: 103,
          color: 'Green',
          orderQty: 2000,
          extra: 0,
          withExtra: 2000,
          hasError: false,

          previous: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000
        },
        {
          id: 104,
          color: 'Yellow',
          orderQty: 2000,
          extra: 0,
          withExtra: 2000,
          hasError: false,

          previous: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000
        },
        {
          id: 105,
          color: 'Green',
          orderQty: 2000,
          extra: 0,
          withExtra: 2000,
          hasError: false,

          previous: 0,
          layCount: 0,
          cutQuantity: 0,
          balance: 2000
        }
      ]
    }
  ];
  const sizeData = {
    width: '',
    length: '',
    total: 0,
    sizeDetails: [
      {
        id: 1,
        size: 'S',
        quantity: 0
      },
      {
        id: 2,
        size: 'M',
        quantity: 0
      },
      {
        id: 3,
        size: 'L',
        quantity: 0
      }
    ]
  };
  // eslint-disable-next-line no-unused-vars
  const [orderDetails, setOrderDetails] = useState(
    // data.map(item => ({
    //   ...item,
    //   isOpen: false,
    //   details: item.details.map(m => ({ ...m, isChecked: false }))
    // }))
    data.map(item => {
      const _item = { ...item };
      _item.isOpen = true;
      _item.details = _item.details.map(m => ({ ...m, isChecked: false }));
      return _item;
    })
  );

  const [sizeInfo, setSizeInfo] = useState(sizeData);

  const onSizeInfoChange = (e, idx) => {
    const { value } = e.target;
    const clickItem = [...sizeInfo.sizeDetails];
    const detailsIndex = clickItem[idx];
    detailsIndex.quantity = value;
    const totalQty = clickItem.reduce((acc, curr) => {
      // acc += +curr.quantity;
      acc += Number(curr.quantity);
      // acc = acc + Number(curr.quantity);
      return acc;
    }, 0);
    setSizeInfo({
      ...sizeInfo,
      detailsIndex,
      total: totalQty
    });
  };
  const onCutQuantityChange = (e, index, oddId) => {
    const { value } = e.target;
    const _cutQuantityDetails = [...orderDetails];
    const clickItem = _cutQuantityDetails[index];
    const checkedItem = [...clickItem.details];
    const checkIndex = checkedItem[oddId];

    checkIndex.hasError = false;
    let cutQty = value ? Number(value) : 0;
    // let cutQty = value ? +value : 0;

    // if (cutQty > checkIndex.withExtra) {
    //   notify('warning', 'limit exceds');
    //   checkIndex.hasError = !checkIndex.hasError;
    //   cutQty = 0;
    // }
    if (sizeInfo.total === 0) {
      notify('warning', 'Size info not found!!!');
    } else if (cutQty > checkIndex.withExtra) {
      notify('warning', 'limit exceds');
      checkIndex.hasError = !checkIndex.hasError;
      cutQty = 0;
    }

    checkIndex.layCount = !Number.isInteger(cutQty / sizeInfo.total)
      ? checkIndex.layCount
      : cutQty / sizeInfo.total;

    checkIndex.cutQuantity = cutQty;
    checkIndex.balance = checkIndex.withExtra - checkIndex.cutQuantity;

    // let cutQtyInputValue = value ? Number(value) : 0;
    // if (cutQtyInputValue > checkIndex.withExtra) {
    //   notify('warning', 'limit exceds');
    //   cutQtyInputValue = 0;
    // }
    // checkIndex.cutQuantity = cutQtyInputValue;
    // checkIndex.balance = checkIndex.withExtra - checkIndex.cutQuantity;

    // checkIndex.balance =
    //   checkIndex.withExtra - checkIndex.cutQuantity < 0
    //     ? checkIndex.withExtra
    //     : checkIndex.withExtra - checkIndex.cutQuantity;

    // checkIndex.cutQuantity =
    //   checkIndex.withExtra - checkIndex.cutQuantity < 0
    //     ? checkIndex.cutQuantity === 0 && alert('limit exceds')
    //     : checkIndex.cutQuantity;

    // const checkedItemValueCheck = () => {
    //   if (checkIndex.balance < 0) {
    //     checkIndex.balance = checkIndex.withExtra;
    //     checkIndex.cutQuantity == 0;
    //   }
    // };
    // console.log(checkedItemValueCheck);

    _cutQuantityDetails[checkIndex] = checkedItem;
    setOrderDetails(_cutQuantityDetails);
  };

  const onDetailsExtraValueChange = (e, index, oddId) => {
    const { value } = e.target;
    const _extraDetails = [...orderDetails];
    const clickItem = _extraDetails[index];
    const checkItem = [...clickItem.details];
    const checkIndex = checkItem[oddId];
    checkIndex.extra = Number(value);
    checkIndex.withExtra = checkIndex.orderQty + (checkIndex.orderQty * checkIndex.extra) / 100;
    const _blance = checkIndex.withExtra - checkIndex.cutQuantity;
    checkIndex.balance = _blance;
    // _extraDetails[checkIndex] = checkItem;
    setOrderDetails(_extraDetails);
  };

  const handleClick = index => {
    const _orderDetails = [...orderDetails];
    const clickedItem = _orderDetails[index];
    clickedItem.isOpen = !clickedItem.isOpen;
    _orderDetails[index] = clickedItem;
    setOrderDetails(_orderDetails);
  };

  const handleCheckBoxChange = (index, oddId) => {
    const _details = [...orderDetails];
    const clickItem = _details[index];
    const checkedItem = [...clickItem.details];
    const checkIndex = checkedItem[oddId];
    checkIndex.isChecked = !checkIndex.isChecked;
    _details[checkIndex] = checkedItem;
    setOrderDetails(_details);

    // const { checked } = e.target;
    // const _details = [...orderDetails];
    // const checkedItem = _details.map(m => {
    //   if (m.id === index) {
    //     m.details.map(n => {
    //       if (n.id === oddId) {
    //         n.isChecked = checked;
    //         // n.isChecked = !n.isChecked;
    //       }
    //       return n;
    //     });
    //   }
    //   return m;
    // });
    // setOrderDetails(checkedItem);
  };

  const handleCancel = () => {
    replace('/cut-plan');
  };
  return (
    <Card className="p-1 mt-3">
      <Form>
        <ActionMenu title="New Cut Plan">
          <NavItem className="mr-1">
            <NavLink
              tag={Button}
              size="sm"
              color="primary"
              type="submit"
              // onClick={() => { onSubmit(); }}
            >
              Save
            </NavLink>
          </NavItem>
          <NavItem className="mr-1">
            <NavLink
              tag={Button}
              size="sm"
              color="secondary"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </NavLink>
          </NavItem>
        </ActionMenu>
        <Row>
          <Col lg={6} xl={6} md={12} sm={12} xs={12}>
            <div className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
              <FormGroup tag={Col} xs="12" sm="12" md="12" lg="12" xl="12" className="mt-n1">
                <Badge color="primary">{`Master Info`}</Badge>
              </FormGroup>
              <Row className="p-1">
                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                  <FormGroup>
                    <Label for="cutPlanNo">Cut Plan No</Label>
                    <Input id="cutPlanNo" type="text" name="cutPlanNo" placeholder="Cut Plan No" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="styleNo">Cut Plan No</Label>
                    <CreatableSelect
                      id="styleNo"
                      options={dropDownStyle}
                      name="styleNo"
                      placeholder="Select Style"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="buyerName">Buyer Name</Label>
                    <Input
                      disabled
                      id="buyerName"
                      type="text"
                      name="buyerName"
                      placeholder="Buyer Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="totalLayCount">Total Lay Count</Label>
                    <Input
                      disabled
                      id="totalLayCount"
                      type="text"
                      name="totalLayCount"
                      placeholder="Total Lay Count"
                    />
                  </FormGroup>
                </Col>
                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                  <FormGroup>
                    <Label for="startDate">Start Date</Label>
                    <Input name="startDate" type="time" id="startDate" placeholder="Start Time" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="styleCategory">Style Category</Label>
                    <Input
                      disabled
                      id="styleCategory"
                      type="text"
                      name="styleCategory"
                      placeholder="Style Category"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="totalQuantity">Total Quantity</Label>
                    <Input
                      disabled
                      id="totalQuantity"
                      type="text"
                      name="totalQuantity"
                      placeholder="Total Quantity"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="layPerCut">Lay Per Cut</Label>
                    <Input id="layPerCut" type="text" name="layPerCut" placeholder="Lay Per Cut" />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} xl={6} md={12} sm={12} xs={12}>
            <div className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
              <FormGroup tag={Col} xs="12" sm="12" md="12" lg="12" xl="12" className="mt-n1">
                <Badge color="primary">{`Size Wise Ratio`}</Badge>
              </FormGroup>
              <Row className="p-1">
                <FormGroup tag={Col} xs={6}>
                  <Input
                    className="text-center"
                    disabled
                    id="size"
                    type="text"
                    name="size"
                    placeholder="Size"
                  />
                </FormGroup>
                <FormGroup tag={Col} xs={6}>
                  <Input
                    className="text-center"
                    disabled
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                  />
                </FormGroup>

                {sizeInfo.sizeDetails.map((m, idx) => (
                  <Fragment key={m.id}>
                    <FormGroup tag={Col} xs={6}>
                      <Input
                        className="text-center"
                        disabled
                        id="size"
                        type="text"
                        value={m.size}
                      />
                    </FormGroup>
                    <FormGroup tag={Col} xs={6}>
                      <Input
                        className="text-center"
                        id="quantity"
                        type="number"
                        value={m.quantity}
                        onChange={e => onSizeInfoChange(e, idx)}
                        onFocus={e => e.target.select()}
                      />
                    </FormGroup>
                  </Fragment>
                ))}

                <FormGroup tag={Col} xs={6}>
                  <Input
                    className="text-center"
                    disabled
                    id="total"
                    type="text"
                    name="total"
                    placeholder="Total"
                  />
                </FormGroup>
                <FormGroup tag={Col} xs={6}>
                  <Input
                    className="text-center"
                    disabled
                    id="lSize"
                    type="text"
                    value={sizeInfo.total}
                  />
                </FormGroup>
              </Row>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
        <FormGroup tag={Col} xs="12" sm="12" md="12" lg="12" xl="12" className="mt-n1">
          <Badge color="primary">{`PO Details`}</Badge>
        </FormGroup>

        <Table className="custom-table p-2 text-center" size="sm" bordered>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>PO No</th>
              <th>Destination</th>
              <th>Inspection Date</th>
              <th>Shipment Mode</th>
              <th>Shipment Date</th>
              <th>Order Qty</th>
              <th>Order UOM</th>
              <th>Excess Qty</th>
              <th>Wastage Qty</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((od, index) => {
              return (
                <Fragment key={od.id}>
                  <tr>
                    <td>
                      <Button.Ripple
                        for="collapseId"
                        tag={Label}
                        onClick={() => handleClick(index)}
                        className="btn-icon"
                        color="flat-primary"
                      >
                        <Maximize2
                          id="collapseId"
                          className={!od.isOpen ? 'd-none' : 'd'}
                          size={15}
                          color="#7367f0"
                        />
                        <Minimize2
                          id="collapseId"
                          size={15}
                          className={od.isOpen ? 'd-none' : 'd'}
                          color="#28c76f"
                        />
                      </Button.Ripple>
                    </td>
                    <td>{od.poNo}</td>
                    <td>{od.destination}</td>
                    <td>{od.inspectionDate}</td>
                    <td>{od.shipmentMode}</td>
                    <td>{od.shipmentDate}</td>
                    <td>{od.orderQty}</td>
                    <td>{od.orderUOM}</td>
                    <td>{od.excess}</td>
                    <td>{od.wastage}</td>
                  </tr>
                  <tr>
                    <td colSpan={10}>
                      <Collapse isOpen={od.isOpen}>
                        <Table className="text-center">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Color</th>
                              <th>Order Qty</th>
                              <th>Extra</th>
                              <th>With Extra</th>
                              <th>Previous</th>
                              <th>Lay Count</th>
                              <th>Cut Qty</th>
                              <th>RC</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {od?.details?.map((odd, oddId) => (
                              <tr key={odd.id}>
                                <td>
                                  <input
                                    onChange={() => handleCheckBoxChange(index, oddId)}
                                    // onChange={e => handleCheckBoxChange(e, od.id, odd.id)}
                                    type="checkbox"
                                    id="checkbox"
                                    checked={odd.isChecked}
                                    // checked={odd.isChecked ? 'checked' : ''}
                                    name="checkbox"
                                  />
                                </td>
                                <td>{odd.color}</td>
                                <td>{odd.orderQty}</td>
                                <td>
                                  {odd.isChecked ? (
                                    <Input
                                      className="text-center"
                                      type="number"
                                      id="extra"
                                      bsSize="sm"
                                      value={odd.extra}
                                      onFocus={e => e.target.select()}
                                      onChange={e => onDetailsExtraValueChange(e, index, oddId)}
                                    />
                                  ) : (
                                    odd.extra
                                  )}
                                </td>
                                <td>{odd.withExtra}</td>
                                <td>{odd.previous}</td>
                                <td>{odd.layCount}</td>
                                <td>
                                  {odd.isChecked ? (
                                    <Input
                                      className="text-center"
                                      type="number"
                                      id="cutQuantity"
                                      bsSize="sm"
                                      value={odd.cutQuantity}
                                      onFocus={e => e.target.select()}
                                      onChange={e => onCutQuantityChange(e, index, oddId)}
                                    />
                                  ) : (
                                    odd.cutQuantity
                                  )}
                                </td>
                                <td>
                                  <span>
                                    <MoreVertical size={18} id="rcIds" color="purple" />
                                  </span>
                                </td>
                                <td>{odd.balance}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Collapse>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default CutPlanAddForm;

/** Change Log
 * 27-jan-2022(Alamgir):Cut Plan Add Form
 */
