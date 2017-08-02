import React, { PropTypes } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import { Field } from 'redux-form';

import BootsrapFormControl from 'components/ui/forms/BootsrapFormControl';

const EditPost = ({initialValues, handleSubmit}) => (
  <Row>
    <Col sm={12}>
      <h1>Edit post {initialValues.title}</h1>
    </Col>

    <Col sm={12}>
      <form onSubmit={handleSubmit}>
        <Field
          label="Title"
          component={BootsrapFormControl}
          type="text"
          name="title"
          id="title"
        />

        <Field
          label="Author"
          component={BootsrapFormControl}
          type="text"
          name="author" id="author"
        />

        <Field
          label="Description"
          component={BootsrapFormControl}
          name="description"
          id="description"
          componentClass="textarea"
        />

        <Button type='submit'>
          Update
        </Button>
      </form>
    </Col>
  </Row>
);

EditPost.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func
};

export default EditPost;
