import React, { Component } from 'react';
// And Design
import { List } from 'antd';
import { Radio } from 'antd';

const styles = {
  root: {
    // display: 'flex',
    flex: 1,
    width: '100%'
  },
};

class TodoList extends Component {

  handleChecked = id => () => {
    const { toggleTodo } = this.props;

    toggleTodo(id);
  };

  render() {
    const { todos } = this.props;

    return (
      <div style={styles.root}>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={todos}
          renderItem={item => (
            <List.Item>
              <Radio
                onClick={this.handleChecked(item.id)}
                checked={item.completed}
              />
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;