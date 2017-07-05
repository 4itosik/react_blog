import PostContainer from 'containers/PostContainer';

import { postsPath } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

export default {
  path: postsPath(),
  component: PostContainer,
  prepareDate: (store, query, params) => {
    if (params.id) store.dispatch(fetchPost(params.id));
  }
};
