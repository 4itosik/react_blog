import { combineReducers } from 'redux';

import posts from 'reducers/Posts';
import post from 'reducers/Post';

export default combineReducers({
  posts,
  post
});
