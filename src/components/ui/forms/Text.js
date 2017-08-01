import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Text = ({label, name, fieldRef}) => (
  <FormGroup controlId={name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text" id={name}
      inputRef={fieldRef}
    />
  </FormGroup>
);

Text.propTypes = {
  label: PropTypes.string,
  name:  PropTypes.string,
  fieldRef: PropTypes.func
};

export default Text;
