import request from 'superagent';

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

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(APIBaseUrl)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}
