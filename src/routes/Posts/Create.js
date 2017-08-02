import CreatePostContainer from 'containers/CreatePostContainer';

import { createPostPath } from 'helpers/routes';

export default {
  exact: true,
  strict: true,
  path: createPostPath(),
  component: CreatePostContainer,
  prepareDate: () => {}
};
