import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Pagination as BsPagination } from 'react-bootstrap';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    const countPage =  Math.ceil((this.props.countItems / this.props.countItemsOnPage));

    this.state = { activePage: this.props.currentPage, countPage };
    this.handleSelect = _.bind(this.handleSelect, this);
  }

  handleSelect(eventKey) {
    this.props.handlePagination(eventKey);

    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <BsPagination bsSize="medium" items={this.state.countPage}
        activePage={this.state.activePage} onSelect={this.handleSelect}
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
