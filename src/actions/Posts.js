// import { filter } from 'lodash/collection';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

//import history from 'helpers/routes/history';

// import { push } from 'react-router-redux';

export function paginationClick(page) {
  return {
    type: types.POSTS_PAGINATION_CLICK,
    page
  };
}

export function likeClick(postId) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${postId}/like`,
      method: 'PATCH',
      query: {},
      types: [
        types.FETCH_POSTS_LIKE_REQUEST,
        types.FETCH_POSTS_LIKE_SUCCESS,
        types.FETCH_POSTS_LIKE_ERROR
      ]
    },
    postId
  };
}

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/?per_page=100',
      method: 'GET',
      query: { },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
