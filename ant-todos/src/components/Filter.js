import React, { Component } from 'react';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  // SHOW_COMPLETED
} from 'ducks/filter';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  span: {
    color: '#00f',
  },
  hoverSpan: {
    color: '#00f',
    cursor: 'pointer',
  }
};

class Filter extends Component {
  state = {
    hover: false,
  };

  render() {
    const { filter, setFilter } = this.props;
    const { hover } = this.state;

    return (
      <div
        style={styles.root}
        onClick={() => setFilter(filter === SHOW_ALL ? SHOW_ACTIVE : SHOW_ALL)}
      >
        <span style={hover ? styles.hoverSpan : styles.span}
          onMouseOver={() => this.setState({ hover: true })}
        >
          {filter === SHOW_ALL ? "Hide" : "Show"} completed item
        </span>
      </div>
    );
  }
}

export default Filter;