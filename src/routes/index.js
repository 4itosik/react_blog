import IndexRoute from 'routes/Posts/Index';
import ShowPostRoute from 'routes/Posts/Show';
import EditPostRoute from 'routes/Posts/Edit';
import AboutRoute from 'routes/About/Index';
import ContactRoute from 'routes/Contact/Index';

export default () => ([
  IndexRoute,
  ShowPostRoute,
  EditPostRoute,
  AboutRoute,
  ContactRoute
]);
