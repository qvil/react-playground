import React, { Component } from 'react';

const styles = {
  root: {
    color: '#00f',
  },
  span: {
    // color: '#00f',
  },
};

class Filter extends Component {
  render() {
    return (
      <div style={styles.root}>
        <span style={styles.span}>Filter</span>
      </div>
    );
  }
}

export default Filter;