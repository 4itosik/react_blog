import React from 'react';
import _ from 'lodash';

import BlogList from 'components/ui/BlogList';
import ChartContainer from 'containers/ChartContainer';
import PaginationContainer from 'containers/PaginationContainer';
//import Pagination from 'components/ui/Pagination';
//import SearchForm from 'components/ui/SearchForm';

import { Row, Col } from 'react-bootstrap';

class BlogPage extends React.Component {
  // componentDidMount() {
  //   this.fetchRequest((res) => { this.setState({posts: res.body}); });
  // }

  // incrementLikeCount(postId) {
  //   const { posts } = this.state;
  //   const index = _.findIndex(posts, {id: postId});
  //
  //   if (index != -1) {
  //     const updatePosts = _.cloneDeep(posts);
  //     updatePosts[index].meta.likeCount = updatePosts[index].meta.likeCount + 1;
  //
  //     this.setState({posts: updatePosts});
  //   }
  // }

  // handlePagination(newCurrentPage) {
  //   this.setState({currentPage: newCurrentPage});
  // }
  //
  // handleSearchForm(text) {
  //   const foundText = text.toLowerCase();
  //
  //   this.fetchRequest((res) => {
  //     const posts = res.body;
  //     const searchPosts = _.filter(
  //       posts, (post) => post.text.toLowerCase().indexOf(foundText) !== -1
  //     );
  //
  //     this.setState({posts: searchPosts, currentPage: 1});
  //   });
  // }
  //
  getPaginatedPosts() {
    const { posts, currentPage, per } = this.props;
    const skip = (currentPage - 1) * per;

    return posts.slice(skip, skip + per);
  }

  // incrementLikeCount={this.incrementLikeCount}
  // <Pagination
  //   handlePagination={this.handlePagination} currentPage={this.state.currentPage}
  //   countItems={this.state.posts.length} countItemsOnPage={this.state.per}
  // />
  // <SearchForm handleSearchForm={this.handleSearchForm}/>
  // <Chart columns={
  //   [...this.state.posts.map((post) => [post.text, post.meta.likeCount]) ]
  // }/>
  render() {
    return (
      <Row>
        <Col md={8}>
          <BlogList posts={this.getPaginatedPosts()}/>

          <PaginationContainer />
        </Col>

        <Col md={4}>
          <ChartContainer />
        </Col>
      </Row>
    );
  }
}

export default BlogPage;
