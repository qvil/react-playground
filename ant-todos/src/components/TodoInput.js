import React, { Component } from 'react';
// And Design
import { Input, Button } from 'antd';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    // maxWidth: 300,
    // width: '100%',
  },
  columnDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    // flex: 1,
  },
};

class TodoInput extends Component {
  state = {
    text: "",
  };

  handleAdd = () => {
    const { addTodo } = this.props;
    const { text } = this.state;

    if (text.trim() === "") {
      return;
    }

    addTodo(text.trim());
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.state;
    const { handleAdd, handleChange } = this;

    return (
      <div style={styles.root}>
        {/* <div style={styles.columnDiv}> */}
        <Input
          style={styles.input}
          placeholder="Add todo here"
          onPressEnter={handleAdd}
          value={text}
          onChange={handleChange}
        />
        <Button
          type="primary"
          icon="plus"
          onClick={handleAdd}
          // size="large"
        />
        {/* </div> */}
      </div>
    );
  }
}

export default TodoInput;