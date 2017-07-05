import Chart from 'components/ui/Chart';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  columns: state.posts.entries.map((post) => [post.text, post.meta.likeCount])
});

export default connect(stateToProps)(Chart);
