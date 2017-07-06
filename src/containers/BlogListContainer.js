import { flowRight } from 'lodash';

import BlogList from 'components/ui/BlogList';
import { connect } from 'react-redux';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

const likeClick = (postId) => ({
  type: types.POSTS_LIKE,
  postId
});

const actionToProps = (dispatch) => ({
  likeClick: flowRight(dispatch, likeClick)
});

const stateToProps = () => ({});

export default connect(stateToProps, actionToProps)(BlogList);
