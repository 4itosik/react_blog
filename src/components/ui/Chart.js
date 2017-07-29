import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Panel } from 'react-bootstrap';

class Chart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) { // eslint-disable-line
      const c3 = require('c3');

      this.chart = c3.generate(
        {
          bindto: ReactDOM.findDOMNode(this.refs.chart),
          data: {
            columns: this.props.columns,
            type: 'pie'
          }
        }
      );
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({columns: newProps.columns});
  }

  render() {
    return (
      <Panel>
        <div ref="chart" />
      </Panel>
    );
  }
}

Chart.propTypes = {
  columns: PropTypes.array
};

export default Chart;
