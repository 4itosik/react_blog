import BlogPage from 'components/views/Posts';
import { connect } from 'react-redux';

import { identity } from 'lodash/util';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  currentPage: state.posts.currentPage,
  per: state.posts.per
});

const mergeProps = (stateToProps) => {
  const skip = (stateToProps.currentPage - 1) * stateToProps.per;

  return { posts: stateToProps.posts.slice(skip, skip + stateToProps.per) };
};

export default connect(stateToProps, identity(), mergeProps)(BlogPage);
