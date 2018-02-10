import React, { Component } from 'react';
// And Design
import { List } from 'antd';
// Custom
import { Todo } from 'components';

const styles = {
  root: {
    // display: 'flex',
    flex: 1,
    width: '100%'
  },
};

class TodoList extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div style={styles.root}>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={todos}
          renderItem={item => (
            <List.Item style={{ padding: 0, paddingLeft: 16,}}>
              <Todo
                item={item}
                toggleTodo={actions.toggleTodo}
                modifyTodo={actions.modifyTodo}
                removeTodo={actions.removeTodo}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;