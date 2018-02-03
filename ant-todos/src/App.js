import React, { Component } from 'react';
// Ant Design
import { Card } from 'antd';
// Custom
import './App.css';
import { TodoInput, TodoList } from 'components';

const styles = {
  root: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // maxWidth: 600
  },
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.root}>
        <Card
          title={<TodoInput />}
          style={{ width: 600 }}
          // bodyStyle={{ padding: 0 }}
          // hoverable
        >

          <TodoList />
        </Card>
      </div >
    );
  }
}

export default App;
