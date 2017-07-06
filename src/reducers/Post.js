import { assign } from 'lodash/object';

import * as types from 'helpers/consts/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case types.POST_LIKE:
      return assign({}, state, {
        entry: assign({}, state.entry, {
          meta: assign({}, state.entry.meta, {
            likeCount: state.entry.meta.likeCount + 1
          })
        })
      });
    default:
      return state;
  }
}
