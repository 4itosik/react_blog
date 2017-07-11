import { combineReducers } from 'redux';

import posts from 'reducers/Posts';
import post from 'reducers/Post';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  posts,
  post,
  routing: routerReducer
});
