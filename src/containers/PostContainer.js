import { flowRight } from 'lodash';

import Post from 'components/views/Post';
import { connect } from 'react-redux';

import { likeClick } from 'actions/Post';

const actionToProps = (dispatch) => ({
  likeClick: flowRight(dispatch, likeClick)
});

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps, actionToProps)(Post);
