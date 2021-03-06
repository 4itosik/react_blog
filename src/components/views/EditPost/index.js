import React, { PropTypes } from 'react';

import { Row, Col } from 'react-bootstrap';

import Form from 'components/ui/PostForm';

const EditPost = ({initialValues, handleSubmit}) => (
  <Row>
    <Col sm={12}>
      <h1>Edit post {initialValues.title}</h1>
    </Col>

    <Col sm={12}>
      <Form handleSubmit={handleSubmit} />
    </Col>
  </Row>
);

EditPost.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func
};

export default EditPost;
