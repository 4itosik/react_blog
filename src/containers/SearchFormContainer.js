import { flowRight, identity } from 'lodash';

import SearchForm from 'components/ui/SearchForm';
import { connect } from 'react-redux';

import history from 'helpers/routes/history';

const searchFormSubmit = (searchText) => (
  history.push({pathname: '/', search: `?searchText=${searchText}`})
);

const actionToProps = (dispatch) => ({
  submitForm: flowRight(dispatch, searchFormSubmit)
});

export default connect(identity(), actionToProps)(SearchForm);
