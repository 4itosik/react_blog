import { flowRight, identity } from 'lodash';

import SearchForm from 'components/ui/SearchForm';
import { connect } from 'react-redux';

import { searchFormSubmit } from 'actions/Posts';

const actionToProps = (dispatch) => ({
  submitForm: flowRight(dispatch, searchFormSubmit)
});

export default connect(identity(), actionToProps)(SearchForm);
