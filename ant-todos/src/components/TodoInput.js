import React, { Component } from 'react';
// And Design
import { Input } from 'antd';
import { Button } from 'antd';

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
  handleAdd = () => {
    console.log("Handle Add");
  };

  render() {
    return (
      <div style={styles.root}>
        {/* <div style={styles.columnDiv}> */}
          <Input
            style={styles.input}
            placeholder="Add todo here"
            onPressEnter={this.handleAdd}
          />
          <Button type="primary" onClick={this.handleAdd}>Add</Button>
        {/* </div> */}
      </div>
    );
  }
}

export default TodoInput;