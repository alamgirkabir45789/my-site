/*
   Title: Zone Add From
   employeeCode: Zone Add From
   Author: Iqbal Hossain
   Date: 09-January-2022
   Modified: 09-January-2022
*/

import Sidebar from '@core/components/sidebar';
import classnames from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FormFeedback from 'reactstrap/lib/FormFeedback';
import { isObjEmpty } from 'utility/Utils';
import { addZone } from '../store/actions';

const ZoneAddForm = props => {
  const { open, toggleSidebar, lastPageInfo } = props;
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm();

  //Submit method for data save
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar();
      dispatch(
        addZone(
          {
            zoneOwnerName: values.zoneOwnerName,
            employeeCode: values.employeeCode,
            phoneNumber: values.phoneNumber,
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
      title="New Zone Owner"
      style={{ transition: '0.5s all ease' }}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="zoneOwnerName">
            <span>Zone Owner Name</span>
          </Label>
          <Input
            name="zoneOwnerName"
            id="zoneOwnerName"
            placeholder="Zone Owner Name"
            innerRef={register({ required: true })}
            invalid={errors.zoneOwnerName && true}
            className={classnames({ 'is-invalid': errors['zoneOwnerName'] })}
          />
          {errors && errors.zoneOwnerName && <FormFeedback>Zone Owner is Required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="employeeCode">
            <span>Emoloyee Code</span>
          </Label>
          <Input
            name="employeeCode"
            id="employeeCode"
            placeholder="employeeCode"
            innerRef={register({ required: true })}
            invalid={errors.employeeCode && true}
            className={classnames({ 'is-invalid': errors['employeeCode'] })}
          />
          {errors && errors.employeeCode && (
            <FormFeedback> Employee Code is Required!</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">
            <span>Phone Number</span>
          </Label>
          <Input
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            innerRef={register({ required: true })}
            invalid={errors.phoneNumber && true}
            className={classnames({ 'is-invalid': errors['phoneNumber'] })}
          />
          {errors && errors.phoneNumber && <FormFeedback>Phone Number is Required!</FormFeedback>}
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

export default ZoneAddForm;
