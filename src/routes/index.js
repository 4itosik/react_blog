import IndexRoute from 'routes/Posts/Index';
import ShowPostRoute from 'routes/Posts/Show';
import EditPostRoute from 'routes/Posts/Edit';
import CreatePostRoute from 'routes/Posts/Create';

import CreateCommentRoute from 'routes/Comments/Create';

import AboutRoute from 'routes/About/Index';
import ContactRoute from 'routes/Contact/Index';

export default () => ([
  IndexRoute,
  CreatePostRoute,
  EditPostRoute,
  ShowPostRoute,
  AboutRoute,
  ContactRoute,
  CreateCommentRoute
]);
