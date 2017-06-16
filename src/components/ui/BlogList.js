import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from '../ui/BlogItem';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem, { post, key: post.id, incrementLikeCount: this.props.incrementLikeCount })
        )
      )
    );
  }
}

export default BlogList;
