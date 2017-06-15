import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem, { post: post, key: post.id, incrementLikeCount: this.props.incrementLikeCount })
        )
      )
    )
  }
}

export default BlogList;
