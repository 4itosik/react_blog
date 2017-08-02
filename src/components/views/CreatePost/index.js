import React, { PropTypes } from 'react';

import { Row, Col } from 'react-bootstrap';

import Form from 'components/ui/PostForm';

const CreatePost = ({handleSubmit}) => (
  <Row>
    <Col sm={12}>
      <h1>Create New Post</h1>
    </Col>

    <Col sm={12}>
      <Form handleSubmit={handleSubmit} />
    </Col>
  </Row>
);

CreatePost.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func
};

export default CreatePost;
