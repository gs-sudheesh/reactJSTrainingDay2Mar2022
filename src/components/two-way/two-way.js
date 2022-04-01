import { Component, createRef } from "react";

export default class TwoWay extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.dataBinding = createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(_e) {
    this.setState({ inputValue: _e.target.value });
  }
  render() {
    return (
      <div>
        Data binding:{" "}
        <input
          ref={this.dataBinding}
          onChange={this.handleOnChange}
          value={this.state.inputValue}
        />
        <br />
        <label> Data binding (Result): {this.state.inputValue}</label>
      </div>
    );
  }
}
