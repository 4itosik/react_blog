import Pagination from 'components/ui/Pagination';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  countItems: state.posts.entries.length,
  currentPage: state.posts.currentPage,
  countItemsOnPage: state.posts.per
});

export default connect(stateToProps)(Pagination);
