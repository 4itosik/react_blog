import EditPost from 'components/views/EditPost';

import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';

import { updatePost } from 'actions/Post';

const submit = (values, dispatch) => (
  dispatch(updatePost(values)).then(
    (data) => {
      dispatch(push(`/posts/${data.post.id}`));
    },
    (error) => {
      throw new SubmissionError(error.response.body);
    }
  )
);

export default connect(
  (state) => ({
    initialValues: {
      id: state.post.entry && state.post.entry.id,
      title: state.post.entry && state.post.entry.title,
      author: state.post.entry && state.post.entry.meta.author,
      description: state.post.entry && state.post.entry.description
    }
  })
)(reduxForm({
  form: 'editPost',
  onSubmit: submit,
  enableReinitialize : true
})(EditPost));
