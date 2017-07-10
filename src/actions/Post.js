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

export function likeClick(postId) {
  return {
    type: types.POST_LIKE,
    postId
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${APIBaseUrl}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost) : dispatch(receivePost(response.body));
      });
  };
}
