import React, { Component } from 'react';

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
    const { hover } = this.state;

    return (
      <div style={styles.root}>
        <span style={hover ? styles.hoverSpan : styles.span}
          onMouseOver={() => this.setState({ hover: true })}
        >
          Show completed item
        </span>
      </div>
    );
  }
}

export default Filter;