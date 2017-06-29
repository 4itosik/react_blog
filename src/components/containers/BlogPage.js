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

    this.state = { posts: [], currentPage: 1, per: 3 };
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
        this.setState({posts: res.body});
      }
    );
  }

  incrementLikeCount(postId) {
    const { posts } = this.state;
    const index = _.findIndex(posts, {id: postId});

    if (index != -1) {
      const updatePosts = _.cloneDeep(posts);
      updatePosts[index].meta.likeCount = updatePosts[index].meta.likeCount + 1;

      this.setState({posts: updatePosts});
    }
  }

  handlePagination(newCurrentPage) {
    this.setState({currentPage: newCurrentPage});
  }

  handleSearchForm(text) {
    const foundText = text.toLowerCase();

    request.get(
      APIBaseUrl,
      {},
      (err, res) => {
        const posts = res.body;
        const searchPosts = _.filter(
          posts, (post) => post.text.toLowerCase().indexOf(foundText) !== -1
        );

        this.setState({posts: searchPosts, currentPage: 1});
      }
    );
  }

  getPaginatedPosts() {
    const skip = (this.state.currentPage - 1) * this.state.per;
    const { posts } = this.state;

    return posts.slice(skip, skip + this.state.per);
  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <BlogList posts={this.getPaginatedPosts()} incrementLikeCount={this.incrementLikeCount} />

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
