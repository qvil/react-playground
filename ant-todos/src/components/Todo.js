import React, { Component } from 'react';
// Ant Design
import { Radio, Input, Button } from 'antd';

// const ButtonGroup = Button.Group;
const styles = {
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  textArea: {
    flex: 1,
  },
  button: {
    // backgroundColor: '#40c057',
    // color: '#fff',
    '&:hover': {
      backgroundColor: '#40c057',
    },
  },
  span: {
    flex: 1,
  },
  completedSpan: {
    flex: 1,
    textDecoration: 'line-through',
    color: 'grey',
  },
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  handleChecked = id => () => {
    const { toggleTodo } = this.props;

    toggleTodo(id);
  };

  handleChange = id => event => {
    this.props.modifyTodo(id, event.target.value);
  }

  saveTodo = id => () => {
    const { modifyTodo, todo } = this.props;
    const { editable } = this.state;
    const { text } = todo;

    if (!editable) {
      this.setState({ editable: true })
      return;
    }

    modifyTodo(id, text);
    this.setState({ editable: false });
  }

  render() {
    const { todo } = this.props;
    const { handleChecked, handleChange, saveTodo } = this;
    const { editable } = this.state;

    return (
      <div
        style={styles.root}
      // onFocus={() => this.setState({ editable: true })}
      >
        <Radio
          onClick={handleChecked(todo.id)}
          checked={todo.completed}
        />
        {
          editable
            ? <Input
              value={todo.text}
              onChange={handleChange(todo.id)}
              onPressEnter={saveTodo(todo.id)}
            // onBlur={saveTodo(todo.id)}
            />
            : <span
              style={todo.completed ? styles.completedSpan : styles.span}
              onClick={() => this.setState({ editable: true })}
            >
              {todo.text}
            </span>
        }
        {/* <ButtonGroup> */}
          <Button
            onClick={saveTodo(todo.id)}
            style={styles.button}
            icon={editable ? "save" : "edit"}
            size="large"
          />
          <Button
            type="danger"
            onClick={() => this.props.deleteTodo(todo.id)}
            icon="delete"
            size="large"
          />
        {/* </ButtonGroup> */}
      </div>
    );
  }
}

export default Todo;