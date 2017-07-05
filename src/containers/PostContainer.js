import BlogItem from 'components/ui/BlogItem.js';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(BlogItem);
