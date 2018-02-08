import React, { Component } from 'react';
// Ant Design
import { Radio, Input, Button } from 'antd';

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
    backgroundColor: '#40c057',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#03f',
    },
  },
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      text: this.props.item.text,
    };
  }
  
  handleChecked = id => () => {
    const { toggleTodo } = this.props;

    toggleTodo(id);
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  saveTodo = id => () => {
    const { modifyTodo } = this.props;
    const { editable, text } = this.state;

    if (!editable) {
      this.setState({ editable: true })
      return;
    }
    
    modifyTodo(id, text);
    this.setState({ editable: false });
  }

  render() {
    const { item } = this.props;
    const { handleChecked, handleChange, saveTodo } = this;
    const { editable, text } = this.state;
    
    // console.log(this.props.todos);

    return (
      <div
        style={styles.root}
        // onFocus={() => this.setState({ editable: true })}
      >
        <Radio
          onClick={handleChecked(item.id)}
          checked={item.completed}
        />
        {
          editable
            ? <Input
              value={text}
              onChange={handleChange}
              // onPressEnter={() => console.log(1111)}
              onPressEnter={saveTodo(item.id)}
              // onBlur={saveTodo(item.id)}
            />
            : <span
              style={{ flex: 1, textDecoration: item.completed ? 'line-through' : 'none' }}
              onClick={() => this.setState({ editable: true })}
            >
              {text}
            </span>
        }
        <Button
          onClick={saveTodo(item.id)}
          style={styles.button}
        >
          {editable ? "Save" : "Edit"}
        </Button>
      </div>
    );
  }
}

export default Todo;