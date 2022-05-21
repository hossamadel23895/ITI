import { Component } from "react";

class FirstComponent extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }

  resetInput = () => this.setState({ userName: "" });

  render() {
    return (
      <div className="content">
        <input
        type="text"
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        {this.state.userName}
        <br />
        <input type="button" value="Reset" onClick={this.resetInput} />
        <br />
        <br />
      </div>
    );
  }
}

export default FirstComponent;
