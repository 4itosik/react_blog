import React, { DOM } from 'react';
import { map } from 'lodash/collection';

import BlogItem from 'components/ui/BlogItem';
import PropTypes from 'prop-types';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;

    return DOM.div(
      null,
      map(
        posts,
        (post) => (
          React.createElement(
            BlogItem, { post, key: post.id, likeClick: this.props.likeClick }
          )
        )
      )
    );
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
  likeClick: PropTypes.func
};

export default BlogList;
