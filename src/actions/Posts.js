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

const sortingPosts = (response, foundText) => {
  if (foundText) {
    const foundTextLowerCase = foundText.toLowerCase();
    const searchPosts = filter(
      response, (post) => post.text.toLowerCase().indexOf(foundTextLowerCase) !== -1
    );

    return receivePosts(searchPosts);
  } else {
    return receivePosts(response);
  }
};

export function fetchPosts(foundText) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(APIBaseUrl)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(sortingPosts(response.body, foundText));
      });
  };
}
