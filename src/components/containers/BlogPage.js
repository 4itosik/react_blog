import React from 'react';
import _ from 'lodash';

import posts from 'helpers/posts'
import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: posts };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  incrementLikeCount(post_id) {
    const { posts } = this.state;
    const index = _.findIndex(posts, {id: post_id});

    if (index != -1) {
      const updatePosts = _.cloneDeep(posts);
      updatePosts[index].meta.like_count = updatePosts[index].meta.like_count + 1;

      this.setState({
       posts: updatePosts
      });
    }
  }

  render() {
    return(
      <div>
        <BlogList posts={this.state.posts} incrementLikeCount={this.incrementLikeCount}/>
        <Chart columns={[...this.state.posts.map( (post) => [post.text, post.meta.like_count]) ]}/>
      </div>
    )
  }
}

export default BlogPage;
