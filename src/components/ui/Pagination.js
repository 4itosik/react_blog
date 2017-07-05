import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Pagination as BsPagination } from 'react-bootstrap';

class Pagination extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     currentPage: this.props.currentPage,
  //     countPages: this.calcCountPages(this.props.countItems, this.props.countItemsOnPage)
  //   };
  //   this.handleSelect = _.bind(this.handleSelect, this);
  // }

  // handleSelect(eventKey) {
  //   this.props.handlePagination(eventKey);
  //
  //   this.setState({
  //     activePage: eventKey
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     currentPage: nextProps.currentPage,
  //     countPages: this.calcCountPages(nextProps.countItems, nextProps.countItemsOnPage)
  //   });
  // }

  calcCountPages() {
    const { countItems, countItemsOnPage } = this.props;

    return Math.ceil((countItems / countItemsOnPage));
  }

  render() {
    return (
      <BsPagination bsSize="medium" items={this.calcCountPages()}
        activePage={this.props.currentPage} onSelect={() => (console.log("1"))}
      />
    );
  }
}

Pagination.propTypes = {
  countItems: PropTypes.number,
  currentPage: PropTypes.number,
  countItemsOnPage: PropTypes.number,
  handlePagination: PropTypes.func
};

export default Pagination;
