import { Component } from "react";

class StudentAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
    };
  }

  handleInputChange = (e) => {
    let changedField = e.target.name;
    let fieldContent = e.target.value;
    switch (changedField) {
      case "id":
        this.state.student.id = fieldContent;
        break;
      case "name":
        this.state.student.name = fieldContent;
        break;
      case "age":
        this.state.student.age = fieldContent;
        break;
      case "email":
        this.state.student.email = fieldContent;
        break;
    }
  };

  handleAddClick = () => {
    if (
      this.state.student.id &&
      this.state.student.name &&
      this.state.student.age &&
      this.state.student.email
    ) {
      this.props.addCallFromChild(this.state.student);
      this.state.student = {};
      let inputFields = document.getElementsByTagName("input");
      for (let field of inputFields) {
        field.value = "";
      }
    } else {
      document.getElementById("errorsDiv").classList.remove("d-none");
    }
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <div className="h2 my-3">Add A Student</div>
        <h5>Enter Student ID</h5>
        <input
          type="number"
          name="id"
          className="bg-dark mb-4"
          onChange={this.handleInputChange}
        />
        <h5>Enter Student Name</h5>
        <input
          type="text"
          name="name"
          className="bg-dark mb-4"
          onChange={this.handleInputChange}
        />
        <h5>Enter Student Age</h5>
        <input
          type="number"
          name="age"
          className="bg-dark mb-4"
          onChange={this.handleInputChange}
        />
        <h5>Enter Student Email</h5>
        <input
          type="email"
          name="email"
          className="bg-dark mb-4"
          onChange={this.handleInputChange}
        />
        <br />
        <button
          className="btn btn-success text-white"
          onClick={this.handleAddClick}
        >
          Add Student
        </button>
        <div id="errorsDiv" className="text-danger h5 my-3 d-none">
          All fields are required!
        </div>
      </div>
    );
  }
}
export default StudentAdd;
