import PostContainer from 'containers/PostContainer';

import { postsPath } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPost } from 'actions/Post';

export default {
  path: postsPath(),
  component: PostContainer,
  exact: true,
  strict: true,
  prepareDate: (store, query, params) => {
    if (initialLoad()) return;

    if (params.id) return store.dispatch(fetchPost(params.id));
  }
};
