import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from 'reducers/Posts';
import post from 'reducers/Post';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  posts,
  post,
  routing: routerReducer,
  form: formReducer
});
