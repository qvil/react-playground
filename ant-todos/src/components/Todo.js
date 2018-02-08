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
  state = {
    editable: false,
  };
  handleChecked = id => () => {
    const { toggleTodo } = this.props;

    toggleTodo(id);
  };

  handleChange = event => {
    this.setState({ temp: event.target.value });
  }

  handleClick = name => () => {
    console.log(name)
    this.setState({ editable: !name });
    // this.setState({ editable: name === "Edit" ? true : false });
  }

  render() {
    const { item } = this.props;
    const { handleChecked, handleChange, handleClick } = this;
    const { editable } = this.state;


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
              value={item.text}
              // size="small"
              onChange={handleChange}
              onBlur={() => this.setState({ editable: false })}
            />
            : <span
              style={{ flex: 1, textDecoration: item.completed ? 'line-through' : 'none' }}
              onClick={() => this.setState({ editable: true })}
            >
              {item.text}
            </span>
        }
        <Button
          onClick={handleClick(editable)}
          // value={}
          style={styles.button}
        >
          {editable ? "Save" : "Edit"}
        </Button>
      </div>
    );
  }
}

export default Todo;