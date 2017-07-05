import BlogPage from 'components/containers/BlogPage';

import { fetchPosts } from 'actions/Posts';

export default {
  exact: true,
  strict: true,
  path: '/',
  component: BlogPage,
  prepareDate: (store) => {
    store.dispatch(fetchPosts());
  }
};
