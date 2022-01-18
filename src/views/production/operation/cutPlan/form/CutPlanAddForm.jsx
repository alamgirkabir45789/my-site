/**
 * Title: Cut Plan Add Form
 * Description: Cut Plan Add Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 18-January-2022
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';
import { selectThemeColors } from 'utility/Utils';

const dropDownStyle = [
  { value: 'AV56567', label: 'AV56567' },
  { value: 'AV1873', label: 'AV1873' },
  { value: 'M7825', label: 'M7825' }
];

const CutPlanAddForm = () => {
  const { register, errors, handleSubmit } = useForm();

  //#region State
  const [style, setStyle] = useState(null);

  //#endregion

  return (
    <div>
      <Card className="p-1">
        <CardHeader>
          <CardTitle className="text-dark font-weight-bold" tag="h2">
            New Cut Plan
          </CardTitle>
        </CardHeader>

        <CardBody>
          <Form
            onSubmit={() => {
              handleSubmit;
            }}
          >
            <Row>
              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <div className="divider divider-left divider-primary">
                  <div className="divider-text text-secondary font-weight-bolder">Master Info</div>
                </div>
                <div className="border rounded rounded-5 p-1">
                  <Row>
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
                </div>
              </Col>

              <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{ size: 'small' }}>
                <div className="divider divider-left divider-primary">
                  <div className="divider-text text-secondary font-weight-bolder">
                    Size Wise Ratio
                  </div>
                </div>
                <div className="border rounded rounded-5 p-1">
                  <Row>
                    <FormGroup tag={Col} xs="6">
                      <Input type="button" value="Size" disabled />
                    </FormGroup>
                    <FormGroup tag={Col} xs="6">
                      <Input type="button" value="Quantity" disabled />
                    </FormGroup>

                    <FormGroup tag={Col} xs="6">
                      <Input type="button" value="S" disabled />
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
                      <Input type="button" value="M" disabled />
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
                      <Input type="button" value="L" disabled />
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
                      <Input type="button" value="Total" disabled />
                    </FormGroup>
                    <FormGroup tag={Col} xs="6">
                      <Input type="button" value="6" disabled />
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
                </div>
              </Col>
              <hr />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CutPlanAddForm;
