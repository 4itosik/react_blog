import BlogPage from 'components/containers/BlogPage';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  currentPage: state.posts.currentPage,
  per: state.posts.per
});

export default connect(stateToProps)(BlogPage);
