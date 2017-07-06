import { flowRight } from 'lodash';

import Post from 'components/containers/Post';
import { connect } from 'react-redux';

import * as types from 'helpers/consts/actionTypes/PostActionTypes';

const likeClick = (postId) => ({
  type: types.POST_LIKE,
  postId
});

const actionToProps = (dispatch) => ({
  likeClick: flowRight(dispatch, likeClick)
});

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps, actionToProps)(Post);
