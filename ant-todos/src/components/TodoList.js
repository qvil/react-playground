import React, { Component } from 'react';
// And Design
import { List } from 'antd';
// Custom
import { Todo, Filter } from 'components';
import { SHOW_ALL } from 'ducks/filter';

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
    const { todos, actions, filter, setFilter, app } = this.props;

    return (
      <div style={styles.root}>
        <List
          size="small"
          // header={<div>Header</div>}
          footer={<Filter filter={filter} setFilter={setFilter} />}
          bordered
          loading={!app.isLoadded}
          dataSource={todos}
          renderItem={todo => (
            <List.Item
              style={{
                ...styles.listItem,
                display: filter !== SHOW_ALL && todo.completed ? 'none' : ''
              }}>
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