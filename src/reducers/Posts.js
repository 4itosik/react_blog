import { assign } from 'lodash';
import { map } from 'lodash/collection';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentPage: 1,
  per: 3
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.POSTS_PAGINATION_CLICK:
      return assign({}, state, { currentPage: action.page });
    case types.POSTS_LIKE:
      return assign({}, state,
        {
          entries: map(state.entries, (post) => {
            if (post.id == action.postId) {
              return assign({}, post, {
                meta: assign({}, post.meta, {
                  likeCount: post.meta.likeCount + 1
                })
              });
            }

            return post;
          })
        }
      );

    default:
      return state;
  }
}
