import * as types from 'helpers/consts/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export function likeClick(postId) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${postId}/like`,
      method: 'PATCH',
      query: {},
      types: [
        types.FETCH_POST_LIKE_REQUEST,
        types.FETCH_POST_LIKE_SUCCESS,
        types.FETCH_POST_LIKE_ERROR
      ]
    },
    postId
  };
}

export function fetchPost(postId) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${postId}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    },
    postId
  };
}
