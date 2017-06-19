import React from 'react';
import _ from 'lodash';

import posts from 'helpers/posts';
import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  incrementLikeCount(postId) {
    const { posts } = this.state;
    const index = _.findIndex(posts, {id: postId});

    if (index != -1) {
      const updatePosts = _.cloneDeep(posts);
      updatePosts[index].meta.likeCount = updatePosts[index].meta.likeCount + 1;

      this.setState({
        posts: updatePosts
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <BlogList posts={this.state.posts} incrementLikeCount={this.incrementLikeCount}/>
        </div>

        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <Chart columns={
              [...this.state.posts.map((post) => [post.text, post.meta.likeCount]) ]
            }/>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
