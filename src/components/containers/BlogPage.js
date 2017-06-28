import React from 'react';
import _ from 'lodash';
import request from 'superagent';

import { APIBaseUrl } from 'helpers/consts/APIBaseUrl';

import BlogList from 'components/ui/BlogList';
import Chart from 'components/ui/Chart';
import Pagination from 'components/ui/Pagination';
import SearchForm from 'components/ui/SearchForm';

import { Row, Col } from 'react-bootstrap';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [], renderPosts: [], currentPage: 1, per: 3 };
    this.incrementLikeCount = _.bind(this.incrementLikeCount, this);
    this.handlePagination = _.bind(this.handlePagination, this);
    this.handleSearchForm = _.bind(this.handleSearchForm, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      APIBaseUrl,
      {},
      (err, res) => {
        const posts = res.body;
        const renderPosts = this.preparePostForPagination(
          posts, this.state.currentPage
        );

        this.setState({posts, renderPosts});
      }
    );
  }

  incrementLikeCount(postId) {
    const { posts } = this.state;
    const index = _.findIndex(posts, {id: postId});

    if (index != -1) {
      const updatePosts = _.cloneDeep(posts);
      updatePosts[index].meta.likeCount = updatePosts[index].meta.likeCount + 1;
      const renderPosts = this.preparePostForPagination(updatePosts, this.state.currentPage);
      this.setState({
        posts: updatePosts,
        renderPosts
      });
    }
  }

  handlePagination(currentPage) {
    const { posts } = this.state;
    const renderPosts = this.preparePostForPagination(posts, currentPage);

    this.setState({renderPosts, currentPage});
  }

  handleSearchForm(text) {
    const foundText = text.toLowerCase();
    const { posts } = this.state;
    const searchPosts = _.filter(
      posts, (post) => post.text.toLowerCase().indexOf(foundText) !== -1
    );
    const currentPage = 1;
    const renderPosts = this.preparePostForPagination(searchPosts, currentPage);

    this.setState({renderPosts, currentPage});
  }

  preparePostForPagination(posts, currentPage, per = this.state.per) {
    const paginationPosts = _.cloneDeep(posts);
    const skip = (currentPage - 1) * per;

    return paginationPosts.slice(skip, skip + per);
  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <BlogList posts={this.state.renderPosts} incrementLikeCount={this.incrementLikeCount} />

          <Pagination
            handlePagination={this.handlePagination} currentPage={this.state.currentPage}
            countItems={this.state.posts.length} countItemsOnPage={this.state.per}
          />
        </Col>

        <Col md={4}>
          <SearchForm handleSearchForm={this.handleSearchForm}/>
          <Chart columns={
            [...this.state.posts.map((post) => [post.text, post.meta.likeCount]) ]
          }/>
        </Col>
      </Row>
    );
  }
}

export default BlogPage;
