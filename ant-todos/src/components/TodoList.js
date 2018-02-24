import React, { Component } from 'react';
// And Design
import { List } from 'antd';
// Custom
import { Todo, Filter } from 'components';

const styles = {
  root: {
    // display: 'flex',
    flex: 1,
    width: '100%'
  },
  listItem: {
    padding: 0,
    paddingLeft: 16,
  },
};

class TodoList extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div style={styles.root}>
        <List
          size="small"
          // header={<div>Header</div>}
          footer={<Filter />}
          bordered
          dataSource={todos}
          renderItem={todo => (
            <List.Item style={styles.listItem}>
            {/* <List.Item style={{ display: todo.completed ? 'none' : '' }}> */}
              <Todo
                todo={todo}
                {...actions}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;