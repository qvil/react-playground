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
    const { actions, database, showLoading } = this.props;

    var todosRef = database.ref('todos/');
    todosRef.on('value', snapshot => {
      let value = snapshot.val();
      let dataArray = [];

      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          const element = value[key];
          let newData = {
            id: key,
            ...element
          };
          dataArray.push(newData);
        }
      }

      actions.initTodo(dataArray);
      showLoading();
    });
  }

  render() {
    const { actions } = this.props;

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
          <TodoList {...this.props} />
        </Card>
      </div >
    );
  }
}

export default App;
