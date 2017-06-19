import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from 'components/ui/BlogItem.jsx';
import PropTypes from 'prop-types';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(
            BlogItem, { post, key: post.id, incrementLikeCount: this.props.incrementLikeCount }
          )
        )
      )
    );
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
  incrementLikeCount: PropTypes.func
};

export default BlogList;
