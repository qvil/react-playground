import React, { Component } from 'react';
// And Design
import { List } from 'antd';
import { Radio } from 'antd';

const mockData = [
  { id: 0, text: "Play", completed: false },
  { id: 1, text: "Love", completed: false },
  { id: 2, text: "Talk", completed: true },
];

const styles = {
  root: {
    // display: 'flex',
    flex: 1,
    width: '100%'
  },
};

class TodoList extends Component {
  state = {
    checked: false,
    mockData: mockData,
  }

  handleChecked = id => () => {
    let targetIndex;
    // let target = mockData.map((value, index) => {
    //   return value.id === id ? index : false
    // });
    for (let index = 0; index < mockData.length; index++) {
      const element = mockData[index];
      if (element.id === id) {
        targetIndex = index
      }
    }

    console.log(targetIndex, this.state.mockData[targetIndex].completed)
    this.setState({ [mockData[targetIndex].completed]: !this.state.mockData[targetIndex].completed })
  };

  render() {
    return (
      <div style={styles.root}>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={mockData}
          renderItem={item => (<List.Item onClick={this.handleChecked(item.id)}><Radio checked={this.state.checked} />{item.text}</List.Item>)}
        />
      </div>
    );
  }
}

export default TodoList;