/*
   Title: Edit page for Line
   Description: Edit page for Line
   Author: Iqbal Hossain
   Date: 08-January-2022
   Modified: 08-January-2022
*/

import Sidebar from '@core/components/sidebar';
import classnames from 'classnames';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FormFeedback from 'reactstrap/lib/FormFeedback';
import { isObjEmpty } from 'utility/Utils';
import { toggleLineSidebar, updateLine } from '../store/actions';

const LineEditForm = props => {
  const { open, data, lastPageInfo } = props;
  const dispatch = useDispatch();

  const { isOpenSidebar } = useSelector(({ lineReducer }) => lineReducer);

  const { register, errors, handleSubmit } = useForm();

  const [check, setCheck] = useState('');

  // const onChangeStatus = e => {
  //   const { type, name, value, checked } = e.target;
  //   setCheck({
  //     ...check,
  //     [name]: type === 'checkbox' ? checked : value === 'active' ? true : false
  //   });
  // };

  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      dispatch(toggleLineSidebar(!isOpenSidebar));
      dispatch(
        updateLine(
          {
            id: data.id,
            lineNumber: values.lineNumber,
            description: values.description,
            status: check ? 'active' : 'inactive'
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
      title="Edit Line"
      style={{ transition: '0.5s all ease' }}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={() => dispatch(toggleLineSidebar(!isOpenSidebar))}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="lineNumber">
            <span>Line Name</span>
          </Label>
          <Input
            name="lineNumber"
            id="lineNumber"
            placeholder=" Line Name"
            defaultValue={data.lineNumber}
            innerRef={register({ required: true })}
            invalid={errors.lineNumber && true}
            className={classnames({ 'is-invalid': errors['lineNumber'] })}
          />
          {errors && errors.lineNumber && <FormFeedback>Line Number is Required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="description">
            <span>Line Description</span>
          </Label>
          <Input
            name="description"
            id="description"
            placeholder="Description"
            defaultValue={data.description}
            innerRef={register({ required: true })}
            invalid={errors.description && true}
            className={classnames({ 'is-invalid': errors['description'] })}
          />
          {errors && errors.description && <FormFeedback>Description is Required!</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="status">
            <Input
              style={{ marginLeft: '5px' }}
              name="status"
              // value={check}
              type="checkbox"
              checked={data.status === 'active' ? { checked: true } : false}
              onChange={e => setCheck({ checked: e.target.checked })}
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
        <Button.Ripple
          type="cancel"
          color="danger"
          outline
          onClick={() => dispatch(toggleLineSidebar(!isOpenSidebar))}
        >
          Cancel
        </Button.Ripple>
      </Form>
    </Sidebar>
  );
};

export default LineEditForm;
