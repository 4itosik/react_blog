import CreatePost from 'components/views/CreateComment';

import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';

import { createCommentForPost } from 'actions/Post';

const submit = (values, dispatch) => (
  dispatch(createCommentForPost(values)).then(
    (data) => {
      dispatch(push(`/posts/${data.post_id}`));
    },
    (error) => {
      throw new SubmissionError(error.response.body);
    }
  )
);

export default connect(
  (state) => ({
    initialValues: {
      id: state.post.entry && state.post.entry.id
    }
  })
)(reduxForm({
  form: 'createComment',
  onSubmit: submit,
  enableReinitialize: true
})(CreatePost));
