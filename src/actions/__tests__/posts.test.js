import configureMockStore from 'redux-mock-store';

import { fetchPosts } from 'actions/Posts';
import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';
import APIMiddleware, { API_CALL } from 'middleware/API';

import nock from 'nock';

const middlewares = [APIMiddleware];

const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {
    const fakePosts = [ {id: 1, title: 'Foo'} ];

    nock(`${APIBaseUrl}/`).get('/')
      .reply(
        200,
        { posts: fakePosts }
      );

    const expectedActions = [
      { [API_CALL]: undefined, type: types.FETCH_POSTS_REQUEST },
      {
        [API_CALL]: undefined,
        type: types.FETCH_POSTS_SUCCESS,
        response: { posts: fakePosts }
      }
    ];

    const store = mockStore({ entries: [], isFetching: false, error: false });

    return store.dispatch(fetchPosts({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
