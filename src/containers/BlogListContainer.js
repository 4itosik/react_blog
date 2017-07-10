import { flowRight } from 'lodash';

import BlogList from 'components/views/Posts/BlogList';
import { connect } from 'react-redux';

import { likeClick } from 'actions/Posts';

const actionToProps = (dispatch) => ({
  likeClick: flowRight(dispatch, likeClick)
});

const stateToProps = () => ({});

export default connect(stateToProps, actionToProps)(BlogList);
