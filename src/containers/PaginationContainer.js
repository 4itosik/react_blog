import { parse, stringify } from 'qs';

import { flowRight } from 'lodash';

import Pagination from 'components/ui/Pagination';
import { connect } from 'react-redux';

import history from 'helpers/routes/history';

const paginationClick = (page) => {
  const query = parse(history.location.search.substr(1));
  query['currentPage'] = page;

  history.push({pathname: '/', search: `?${stringify(query)}`});
};

const actionToProps = (dispatch) => ({
  handlePagination: flowRight(dispatch, paginationClick)
});

const stateToProps = (state) => ({
  totalPages: state.posts.totalPages,
  currentPage: state.posts.currentPage
});

export default connect(stateToProps, actionToProps)(Pagination);
