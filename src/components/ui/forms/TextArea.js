import React, { PropTypes } from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const TextArea = ({label, name, fieldRef}) => (
  <FormGroup controlId={name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="textarea" id={name}
      inputRef={fieldRef}
    />
  </FormGroup>
);

TextArea.propTypes = {
  label: PropTypes.string,
  name:  PropTypes.string,
  fieldRef: PropTypes.func
};

export default TextArea;
