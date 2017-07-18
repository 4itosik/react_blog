import { flowRight } from 'lodash';

import Pagination from 'components/ui/Pagination';
import { connect } from 'react-redux';

import { paginationClick } from 'actions/Posts';

const actionToProps = (dispatch) => ({
  handlePagination: flowRight(dispatch, paginationClick)
});

const stateToProps = (state) => ({
  totalPages: state.posts.totalPages,
  currentPage: state.posts.currentPage
});

export default connect(stateToProps, actionToProps)(Pagination);
