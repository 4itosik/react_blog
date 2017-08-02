import React, { PropTypes } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import { Field } from 'redux-form';
import BootsrapFormControl from 'components/ui/forms/BootsrapFormControl';

const CreatePost = ({handleSubmit}) => (
  <Row>
    <Col sm={12}>
      <h1>Create New Comment</h1>
    </Col>

    <Col sm={12}>
      <form onSubmit={handleSubmit}>
        <Field
          label="User Name"
          component={BootsrapFormControl}
          type="user_name"
          name="user_name"
          id="user_name"
        />

        <Field
          label="Text"
          component={BootsrapFormControl}
          name="text"
          id="text"
          componentClass="textarea"
        />

        <Button type='submit'>
          Create
        </Button>
      </form>
    </Col>
  </Row>
);

CreatePost.propTypes = {
  handleSubmit: PropTypes.func
};

export default CreatePost;
