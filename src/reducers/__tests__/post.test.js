import reducer from 'reducers/Post';
import * as types from 'helpers/consts/actionTypes/PostActionTypes';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        error: false,
        entry: null,
        comments: []
      }
    );
  });

  it('should handle fetch post', () => {
    expect(
      reducer([], {
        type: types.FETCH_POST_SUCCESS,
        response: {
          post: {
            id: 10,
            title: 'Foo'
          }
        }
      })
    ).toEqual(
      {
        isFetching: false,
        error: false,
        entry: {
          id: 10, title: 'Foo'
        },
        comments: []
      }
    );
  });
});
