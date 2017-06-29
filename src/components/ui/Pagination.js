import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Pagination as BsPagination } from 'react-bootstrap';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: this.props.currentPage,
      countPages: this.calcCountPages(this.props.countItems, this.props.countItemsOnPage)
    };
    this.handleSelect = _.bind(this.handleSelect, this);
  }

  handleSelect(eventKey) {
    this.props.handlePagination(eventKey);

    this.setState({
      activePage: eventKey
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.currentPage,
      countPages: this.calcCountPages(nextProps.countItems, nextProps.countItemsOnPage)
    });
  }

  calcCountPages(countItems, countItemsOnPage) {
    return Math.ceil((countItems / countItemsOnPage));
  }

  render() {
    return (
      <BsPagination bsSize="medium" items={this.state.countPages}
        activePage={this.state.currentPage} onSelect={this.handleSelect}
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
