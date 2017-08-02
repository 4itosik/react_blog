import CreatePost from 'components/views/CreatePost';

import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';

import { createPost } from 'actions/Post';

const submit = (values, dispatch) => (
  dispatch(createPost(values)).then(
    (data) => {
      dispatch(push(`/posts/${data.post.id}`));
    },
    (error) => {
      throw new SubmissionError(error.response.body);
    }
  )
);

export default connect()(reduxForm({
  form: 'editPost',
  onSubmit: submit
})(CreatePost));
