import React, { PropTypes } from 'react';
import request from 'superagent';

import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

import BlogItem from 'components/ui/BlogItem.jsx';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: null };
  }

  componentDidMount() {
    this.fetachPost();
  }

  componentWillUnmount() {
    this.ignoreLastFetch = false;
  }

  fetachPost() {
    const id = this.props.match.params.id;

    request.get(
      `${APIBaseUrl}/posts/${id}`,
      {},
      (err, res) => (
        !err && !this.ignoreLastFetch &&
          this.setState({ post: (res).body })
      )
    );
  }

  render() {
    const { post } = this.state;

    if (post)
      return <BlogItem post={this.state.post} />;
    else
      return false;
  }
}

Post.propTypes = {
  match: React.PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string
  })
};

export default Post;
