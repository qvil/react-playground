import React, { Component } from "react";
import { MemoComponent, NormalComponent } from "./components/memo/index";

class App extends Component {
  state = {
    input: "",
    text: ""
  };

  changeMemo = () => {
    this.setState({ text: this.state.input });
  };

  handleChangeInput = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <MemoComponent text={this.state.text} />
        <NormalComponent text={this.state.text} />
        <input type="text" onChange={this.handleChangeInput} />
        <button onClick={this.changeMemo}>Change props</button>
      </div>
    );
  }
}

export default App;
