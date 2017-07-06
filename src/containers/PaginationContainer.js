import { flowRight } from 'lodash';

import Pagination from 'components/ui/Pagination';
import { connect } from 'react-redux';

import * as types from 'helpers/consts/actionTypes/PostsActionTypes';

const paginationClick = (page) => ({
  type: types.POSTS_PAGINATION_CLICK,
  page
});

const actionToProps = (dispatch) => ({
  handlePagination: flowRight(dispatch, paginationClick)
});

const stateToProps = (state) => ({
  countItems: state.posts.entries.length,
  currentPage: state.posts.currentPage,
  countItemsOnPage: state.posts.per
});

export default connect(stateToProps, actionToProps)(Pagination);
