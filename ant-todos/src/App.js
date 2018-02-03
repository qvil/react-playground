import React, { Component } from 'react';
// Ant Design
// Custom
import { TodoInput } from 'components';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.root}>
        <TodoInput />
      </div >
    );
  }
}

export default App;
