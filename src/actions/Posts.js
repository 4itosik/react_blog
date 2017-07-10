import request from 'superagent';

import { filter } from 'lodash/collection';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';
import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

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

export function paginationClick(page) {
  return {
    type: types.POSTS_PAGINATION_CLICK,
    page
  };
}

export function likeClick(postId) {
  return {
    type: types.POSTS_LIKE,
    postId
  };
}

export function fetchPosts(foundText) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(APIBaseUrl)
      .end((err, response) => {
        if (err) {
          return dispatch(errorPosts());
        } else if (foundText) {
          const foundTextLowerCase = foundText.toLowerCase();
          const searchPosts = filter(
            response.body, (post) => post.text.toLowerCase().indexOf(foundTextLowerCase) !== -1
          );

          return dispatch(receivePosts(searchPosts));
        } else {
          return dispatch(receivePosts(response.body));
        }
      });
  };
}
