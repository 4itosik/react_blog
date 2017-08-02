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

export function updatePost(values) {
  const postId = values.id;

  return {
    [API_CALL]: {
      endpoint: `/posts/${postId}`,
      method: 'PATCH',
      query: {},
      payload: { post: values },
      types: [
        types.FETCH_POST_UPDATE_REQUEST,
        types.FETCH_POST_UPDATE_SUCCESS,
        types.FETCH_POST_UPDATE_ERROR
      ]
    },
    postId
  };
}

export function createPost(values) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'POST',
      query: {},
      payload: { post: values },
      types: [
        types.FETCH_POST_CREATE_REQUEST,
        types.FETCH_POST_CREATE_SUCCESS,
        types.FETCH_POST_CREATE_ERROR
      ]
    }
  };
}
