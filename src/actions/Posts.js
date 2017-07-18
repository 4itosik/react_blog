import { parse, stringify } from 'qs';

import { decamelize } from 'humps';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

import history from 'helpers/routes/history';

// paginationClick() и searchFormSubmit() наверно надо вынести куда то в другое место?

export function paginationClick(page) {
  const query = parse(history.location.search.substr(1));
  query['currentPage'] = page;

  history.push({pathname: '/', search: `?${stringify(query)}`});
}

export function searchFormSubmit(searchText) {
  history.push({pathname: '/', search: `?searchText=${searchText}`});
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

export function fetchPosts(query) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: { page: query.currentPage, q: { [decamelize('titleCont')]: query.searchText } },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
