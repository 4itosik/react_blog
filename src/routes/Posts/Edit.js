import EditPostContainer from 'containers/EditPostContainer';

import { editPostPath } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

import { fetchPost } from 'actions/Post';

export default {
  path: editPostPath(),
  component: EditPostContainer,
  prepareDate: (store, query, params) => {
    if (initialLoad()) return;

    if (params.id) return store.dispatch(fetchPost(params.id));
  }
};
