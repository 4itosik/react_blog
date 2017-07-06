import { flowRight } from 'lodash';

import SearchForm from 'components/ui/SearchForm';
import { connect } from 'react-redux';

import { fetchPosts } from 'actions/Posts';

const actionToProps = (dispatch) => ({
  submitForm: flowRight(dispatch, fetchPosts)
});

const stateToProps = () => ({
}); // Хотел сделать connect({}, actionToProps)(SearchForm) но оно не работает,
// очень похоже на https://github.com/reactjs/react-redux/issues/312

export default connect(stateToProps, actionToProps)(SearchForm);
