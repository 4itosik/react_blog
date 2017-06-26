import React from 'react';
import _ from 'lodash';
import request from 'superagent';

import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

import BlogList from 'components/ui/BlogList';
import Chart from 'components/ui/Chart';

import { Row, Col } from 'react-bootstrap';

import Pagination from 'components/ui/Pagination';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [], renderPosts: [], currentPage: 1, per: 3, countPages: 0 };
    this.incrementLikeCount = _.bind(this.incrementLikeCount, this);
    this.handlePagination = _.bind(this.handlePagination, this);
  }

  componentDidMount() {
    this.fetachPosts();
  }

  fetachPosts() {
    request.get(
      APIBaseUrl,
      {},
      (err, res) => {
        const posts = res.body;
        const renderPosts = this.preparePostForPagination(
          posts, this.state.currentPage, this.state.per
        );
        const countPages = Math.ceil((posts.length / this.state.per));

        this.setState({posts, renderPosts, countPages});
      }
    );
  }

  incrementLikeCount(postId) {
    const { posts } = this.state;
    const index = _.findIndex(posts, {id: postId});

    if (index != -1) {
      const updatePosts = _.cloneDeep(posts);
      updatePosts[index].meta.likeCount = updatePosts[index].meta.likeCount + 1;

      this.setState({
        posts: this.preparePostForPagination(updatePosts, this.state.currentPage, this.state.per)
      });
    }
  }

  handlePagination(currentPage) {
    const { posts } = this.state;
    const renderPosts = this.preparePostForPagination(posts, currentPage, this.state.per);

    this.setState({renderPosts, currentPage});
  }

  preparePostForPagination(posts, currentPage, per) {
    const paginationPosts = _.cloneDeep(posts);

    const skip = (currentPage - 1) * per;
    return paginationPosts.slice(skip, skip + per);
  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <BlogList posts={this.state.renderPosts} incrementLikeCount={this.incrementLikeCount} />

          <Pagination handlePagination={this.handlePagination} items={this.state.countPages} />
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
