import PostsContainer from 'containers/PostsContainer';

import { fetchPosts } from 'actions/Posts';

export default {
  strict: true,
  path: '/',
  component: PostsContainer,
  prepareDate: (store) => {
    store.dispatch(fetchPosts());
  }
};
