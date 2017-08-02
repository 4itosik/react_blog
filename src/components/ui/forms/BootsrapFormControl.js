import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const BootsrapFormControl = (
  { input, name, label, componentClass, type, meta: { touched, error, warning } }
) => (
  <FormGroup controlId={name} validationState={(error && 'error') || (warning && 'warning')}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} type={type} componentClass={componentClass} />
    {touched && (error && (
      <HelpBlock>{error}</HelpBlock>
    ) || (warning && (
        <HelpBlock>{warning}</HelpBlock>
      )))}
  </FormGroup>
);

BootsrapFormControl.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  componentClass: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default BootsrapFormControl;
