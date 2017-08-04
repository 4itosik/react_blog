import { API_CALL } from 'middleware/API';

import { likeClick, createPost } from 'actions/Post';
import * as types from 'helpers/consts/actionTypes/PostActionTypes';

describe('Action Post', () => {
  it('returns action currect API CALL for likeClickAction', () => {
    const fakePostId = 10;

    expect(likeClick(fakePostId)[API_CALL]).toEqual({
      method: 'PATCH',
      endpoint: `/posts/${fakePostId}/like`,
      query: {},
      types: [
        types.FETCH_POST_LIKE_REQUEST,
        types.FETCH_POST_LIKE_SUCCESS,
        types.FETCH_POST_LIKE_ERROR
      ]
    });
  });

  it('returns action currect API CALL for createPost', () => {
    const fakeValues = { title: 'Foo', body: 'Bar' };

    expect(createPost(fakeValues)[API_CALL]).toEqual({
      method: 'POST',
      endpoint: '/posts',
      query: {},
      payload: { post: fakeValues },
      types: [
        types.FETCH_POST_CREATE_REQUEST,
        types.FETCH_POST_CREATE_SUCCESS,
        types.FETCH_POST_CREATE_ERROR
      ]
    });
  });
});
