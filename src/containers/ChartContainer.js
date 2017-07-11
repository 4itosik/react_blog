import Chart from 'components/ui/Chart';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  columns: state.posts.entries.map((post) => [post.title, post.meta.likes])
});

export default connect(stateToProps)(Chart);
