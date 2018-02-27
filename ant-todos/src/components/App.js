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
  componentDidMount() {
    const { actions, database } = this.props;

    var todosRef = database.ref('todos/');
    todosRef.on('value', snapshot => {
      // updateStarCount(postElement, snapshot.val());
      console.log(snapshot.val()) // Data here!!
      actions.initTodo(snapshot);
    });
  }

  render() {
    const { todos, actions, filter, setFilter } = this.props;

    return (
      <div className="App" style={styles.root}>
        <Card
          title={<TodoInput
            addTodo={actions.addTodo}
          />}
          style={{ width: 600 }}
        // bodyStyle={{ padding: 0 }}
        // hoverable
        >
          <TodoList
            todos={todos}
            actions={actions}
            filter={filter}
            setFilter={setFilter}
          />
        </Card>
      </div >
    );
  }
}

export default App;
