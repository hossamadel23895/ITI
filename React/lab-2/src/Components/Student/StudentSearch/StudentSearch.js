import "./StudentSearch.css";
import { Component } from "react";

class StudentSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
    // Calling a remote function with a local data.
    this.props.updateCallFromChild(e.target.value);
  };

  render() {
    return (
      <div className="my-3 d-flex justify-content-end">
        <span className="fw-bold align-middle mx-3">Search By Name</span>
        <input
          type="text"
          className="text-black"
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default StudentSearch;
