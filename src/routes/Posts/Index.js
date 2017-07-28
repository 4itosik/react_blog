import PostsContainer from 'containers/PostsContainer';

import { fetchPosts } from 'actions/Posts';

import initialLoad from 'helpers/initialLoad';

export default {
  exact: true,
  strict: true,
  path: '/',
  component: PostsContainer,
  prepareDate: (store, query) => {
    if (initialLoad()) return;

    return store.dispatch(fetchPosts(query));
  }
};
