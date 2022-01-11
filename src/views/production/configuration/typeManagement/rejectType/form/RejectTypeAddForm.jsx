/**
 * Title: RejectType Add Form
 * productionProcess: RejectType Add Form
 * Author: Iqbal Hossain
 * Date: 05-January-2022
 * Modified: 10-January-2022
 */

import Sidebar from '@core/components/sidebar';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FormFeedback from 'reactstrap/lib/FormFeedback';
import { isObjEmpty, selectThemeColors } from 'utility/Utils';
import { getDropDownProductinProcess } from 'views/production/configuration/productionProcess/store/actions';
import { addRejectType } from '../store/actions';

// const productionProcesses = [
//   { id: 1, label: 'Cutting', value: 'Cutting' },
//   { id: 2, label: 'Print', value: 'Print' },
//   { id: 3, label: 'Wash', value: 'Wash' }
// ];

const RejectTypeAddForm = props => {
  const { open, toggleSidebar, lastPageInfo } = props;
  const dispatch = useDispatch();

  const { dropDownItems } = useSelector(({ productionProcessReducer }) => productionProcessReducer);
  //#region State
  const [productionProcess, setProductionProcess] = useState(null);
  //#endregion

  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getDropDownProductinProcess());
  }, []);

  //Submit method for data save
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar();
      dispatch(
        addRejectType(
          {
            rejectTypeName: values.rejectTypeName,
            productionProcess: productionProcess.label,
            status: 'active'
          },
          lastPageInfo
        )
      );
    }
  };

  return (
    <Sidebar
      size="lg"
      open={open}
      title="New Reject Type"
      style={{ transition: '0.5s all ease' }}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="rejectTypeName">
            <span>Reject Type Name</span>
          </Label>
          <Input
            name="rejectTypeName"
            id="rejectTypeName"
            placeholder="Reject Type"
            innerRef={register({ required: true })}
            invalid={errors.rejectTypeName && true}
            className={classnames({ 'is-invalid': errors['rejectTypeName'] })}
          />
          {errors && errors.rejectTypeName && <FormFeedback>Reject Type is Required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="productionProcess">Production Process</Label>
          <CreatableSelect
            id="role"
            isSearchable
            isClearable
            theme={selectThemeColors}
            options={dropDownItems}
            classNamePrefix="select"
            innerRef={register({ required: true })}
            value={productionProcess}
            onChange={data => {
              setProductionProcess(data);
            }}
          />
          {errors && errors.productionProcess && (
            <FormFeedback>Production Process is Required!</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="status">
            <Input
              style={{ marginLeft: '5px' }}
              name="status"
              type="checkbox"
              onChange={e => dispatch({ checked: e.target.checked })}
            />
            <span style={{ marginLeft: '25px' }}> Is Active </span>
          </Label>
        </FormGroup>

        <Button.Ripple type="submit" className="mr-1" color="primary">
          Submit
        </Button.Ripple>
        <Button.Ripple type="reset" className="mr-1" outline color="secondary">
          Reset
        </Button.Ripple>
        <Button.Ripple type="cancel" color="danger" outline onClick={toggleSidebar}>
          Cancel
        </Button.Ripple>
      </Form>
    </Sidebar>
  );
};

export default RejectTypeAddForm;

/** Change Log
 *  10-January-2022(Iqbal): Create Reject Type Add Form
 */
