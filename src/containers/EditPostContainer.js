//import { flowRight } from 'lodash';
import EditPost from 'components/views/EditPost';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.title,
      author: state.post.entry.author,
      createdAt: state.post.entry.createdAt
    }
  })
)(reduxForm({ form: 'editPost' })(EditPost));
