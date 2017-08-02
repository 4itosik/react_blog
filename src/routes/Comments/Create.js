import CreateCommentContainer from 'containers/CreateCommentContainer';

import { createCommentPath } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPost } from 'actions/Post';

export default {
  path: createCommentPath(),
  component: CreateCommentContainer,
  prepareDate: (store, query, params) => {
    if (initialLoad()) return;

    if (params.id) return store.dispatch(fetchPost(params.id));
  }
};
