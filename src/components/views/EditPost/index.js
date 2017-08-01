import React, { PropTypes } from 'react';

import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { Field } from 'redux-form';

const EditPost = ({initialValues, handleSubmit}) => (
  <Row>
    <Col sm={12}>
      <h1>Edit post {initialValues.title}</h1>
    </Col>

    <Col sm={12}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='title'>
          <ControlLabel>Title</ControlLabel>
          <Field component="input" type="text" name="title" id="title" />
        </FormGroup>

        <Button type='submit'>
          Update
        </Button>
      </form>
    </Col>
  </Row>
);

EditPost.propTypes = {
  initialValues: {
    title: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.string
  },
  handleSubmit: PropTypes.func
};

export default EditPost;
