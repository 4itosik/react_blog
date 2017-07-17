import PostsContainer from 'containers/PostsContainer';

import { fetchPosts } from 'actions/Posts';

export default {
  exact: true,
  strict: true,
  path: '/',
  component: PostsContainer,
  prepareDate: (store) => {
    store.dispatch(fetchPosts());
  }
};
