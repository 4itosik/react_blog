import request from 'superagent';

import * as types from 'helpers/consts/actionTypes/PostActionTypes';
import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const requestPostLike = (postId) => ({
  type: types.FETCH_POST_LIKE_REQUEST,
  postId
});

const errorPostLike = (postId) => ({
  type: types.FETCH_POST_LIKE_ERROR,
  postId
});

const receivePostLike = (postId, totalLike) => ({
  type: types.FETCH_POST_LIKE_SUCCESS,
  postId,
  totalLike
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${APIBaseUrl}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost) : dispatch(receivePost(response.body.post));
      });
  };
}

export function likeClick(postId) {
  return (dispatch) => {
    dispatch(requestPostLike(postId));

    return request
      .patch(`${APIBaseUrl}/posts/${postId}/like`)
      .end((err, response) => {
        if (err) {
          return dispatch(errorPostLike(postId));
        } else {
          return dispatch(receivePostLike(postId, response.body.post.meta.likes));
        }
      });
  };
}
