import Contact from 'components/views/Contact';
import { contactPage } from 'helpers/routes';

export default {
  path: contactPage(),
  component: Contact,
  prepareDate: () => {}
};
