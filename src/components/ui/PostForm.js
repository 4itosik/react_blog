import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

import { Field } from 'redux-form';
import BootsrapFormControl from 'components/ui/forms/BootsrapFormControl';

const PostForm = ({handleSubmit}) => (
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
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default PostForm;
