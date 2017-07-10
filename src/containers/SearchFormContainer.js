import { flowRight, identity } from 'lodash';

import SearchForm from 'components/ui/SearchForm';
import { connect } from 'react-redux';

import { fetchPosts } from 'actions/Posts';

const actionToProps = (dispatch) => ({
  submitForm: flowRight(dispatch, fetchPosts)
});

export default connect(identity(), actionToProps)(SearchForm);
