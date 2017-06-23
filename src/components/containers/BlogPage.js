import React from 'react';
import _ from 'lodash';
import request from 'superagent';

import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';

import { Row, Col } from 'react-bootstrap';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  componentDidMount() {
    this.fetachPosts();
  }

  fetachPosts() {
    request.get(
      APIBaseUrl,
      {},
      (err, res) => this.setState({ posts: res.body })
    );
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
      <Row>
        <Col md={8}>
          <BlogList posts={this.state.posts} incrementLikeCount={this.incrementLikeCount}/>
        </Col>

        <Col md={4}>
          <Chart columns={
            [...this.state.posts.map((post) => [post.text, post.meta.likeCount]) ]
          }/>
        </Col>
      </Row>
    );
  }
}

export default BlogPage;
