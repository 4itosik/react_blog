import request from 'superagent';

import { filter } from 'lodash/collection';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';
import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

import history from 'helpers/routes/history';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

const requestPostLike = (postId) => ({
  type: types.FETCH_POSTS_LIKE_REQUEST,
  postId
});

const errorPostLike = (postId) => ({
  type: types.FETCH_POSTS_LIKE_ERROR,
  postId
});

const receivePostLike = (postId, totalLike) => ({
  type: types.FETCH_POSTS_LIKE_SUCCESS,
  postId,
  totalLike
});

export function paginationClick(page) {
  return {
    type: types.POSTS_PAGINATION_CLICK,
    page
  };
}

export function fetchPosts(foundText) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${APIBaseUrl}/?per_page=100`)
      .end((err, response) => {
        if (err) {
          return dispatch(errorPosts());
        } else if (foundText) {
          const foundTextLowerCase = foundText.toLowerCase();
          const searchPosts = filter(
            response.body.posts, (post) => (
              post.title.toLowerCase().indexOf(foundTextLowerCase) !== -1
            )
          );

          return dispatch(receivePosts(searchPosts));
        } else {
          return dispatch(receivePosts(response.body.posts));
        }
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
