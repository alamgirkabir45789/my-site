/*
   Title: Cut Plan Add Form
   Description: Cut Plan Add Form
   Author: Alamgir Kabir
   Date: 27-January-2022
   Modified: 27-January-2022
*/

import '@custom-styles/merchandising/others/custom-table.scss';
import ActionMenu from 'layouts/components/menu/action-menu';
import { useState } from 'react';
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

const dropDownStyle = [
  {
    value: 'Style-01',
    label: 'Style-01'
  },
  { value: 'Style-02', label: 'Style-02' }
];

const CutPlanAddForm = () => {
  const { replace } = useHistory();

  const [nestedTableOpen, setNestedTableOpen] = useState(false);

  const handleClick = () => {
    setNestedTableOpen(!nestedTableOpen);
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
                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="size"
                      type="text"
                      name="size"
                      placeholder="Size"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="sSize"
                      type="text"
                      name="sSize"
                      placeholder="S"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="mSize"
                      type="text"
                      name="mSize"
                      placeholder="M"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="lSize"
                      type="text"
                      name="lSize"
                      placeholder="L"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="total"
                      type="text"
                      name="total"
                      placeholder="Total"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="width">Width</Label>
                    <Input id="width" type="text" name="width" placeholder="Width" />
                  </FormGroup>
                </Col>
                <Col lg={6} xl={6} md={6} sm={6} xs={6}>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="quantity"
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      id="sSize"
                      type="number"
                      name="sSize"
                      placeholder="0"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      id="mSize"
                      type="number"
                      name="mSize"
                      placeholder="0"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      id="lSize"
                      type="text"
                      name="lSize"
                      placeholder="0"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="text-center"
                      disabled
                      id="total"
                      type="number"
                      name="total"
                      placeholder="0"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="length">Length</Label>
                    <Input id="length" type="text" name="length" placeholder="Length" />
                  </FormGroup>
                </Col>
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
            <tr>
              <td>
                <Button.Ripple
                  for="collapseId"
                  tag={Label}
                  onClick={handleClick}
                  className="btn-icon"
                  color="flat-primary"
                >
                  <Maximize2
                    id="collapseId"
                    className={!nestedTableOpen ? 'd-none' : 'd'}
                    size={15}
                    color="#7367f0"
                  />
                  <Minimize2
                    id="collapseId"
                    size={15}
                    className={nestedTableOpen ? 'd-none' : 'd'}
                    color="#28c76f"
                  />
                </Button.Ripple>
              </td>
              <td>PO-01</td>
              <td>France</td>
              <td>2022-01-25</td>
              <td>Air</td>
              <td>2022-01-25</td>
              <td>5000</td>
              <td>PC</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>

          <>
            <tr>
              <td colSpan={10}>
                <Collapse isOpen={nestedTableOpen}>
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
                      <tr>
                        <td>
                          <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
                        </td>
                        <td>Red</td>
                        <td>2000</td>
                        <td>
                          <Input
                            className="text-center"
                            type="text"
                            id="extra"
                            name="extra"
                            placeholder="0"
                            bsSize="sm"
                          />
                        </td>
                        <td>2000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          <Input
                            className="text-center"
                            type="text"
                            id="cutQuantity"
                            name="cutQuantity"
                            placeholder="0"
                            bsSize="sm"
                          />
                        </td>
                        <td>
                          <span>
                            <MoreVertical size={18} id="rcIds" color="purple" />
                          </span>
                        </td>
                        <td>2000</td>
                      </tr>
                    </tbody>
                  </Table>
                </Collapse>
              </td>
            </tr>
          </>

          {/* <Collapse isOpen={nestedTableOpen}>
            <Table>
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
                <tr>
                  <td>
                    <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
                  </td>
                  <td>Red</td>
                  <td>2000</td>
                  <td>0</td>
                  <td>2000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>
                    <MoreVertical size={18} id="rcIds" color="purple" />
                  </td>
                  <td>2000</td>
                </tr>
              </tbody>
            </Table>
          </Collapse> */}
        </Table>
      </div>
    </Card>
  );
};

export default CutPlanAddForm;

/** Change Log
 * 27-jan-2022(Alamgir):Cut Plan Add Form
 */
