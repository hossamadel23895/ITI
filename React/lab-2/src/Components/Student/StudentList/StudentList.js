import "./StudentList.css";
import { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import StudentSearch from "../StudentSearch/StudentSearch.js";
import StudentAdd from "../StudentAdd/StudentAdd.js";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStudents: this.props.allStudents,
      listedStudents: this.props.allStudents,
    };
  }

  updateRenderedList = (searchValue) => {
    let FilteredList = this.state.allStudents.filter((student) =>
      student.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.setState({ listedStudents: FilteredList });
  };

  addStudent = (student) => {
    this.state.allStudents.push(student);
    this.updateRenderedList("");
  };

  render() {
    if (this.state.listedStudents.length > 0) {
      return (
        <div>
          <div className="h2 text-center my-3">Students List</div>
          <div className="d-flex">
            <div style={{ width: "50vw" }}>
              <StudentAdd addCallFromChild={this.addStudent}></StudentAdd>
            </div>
            <div style={{ width: "40vw" }}>
              <StudentSearch
                updateCallFromChild={this.updateRenderedList}
              ></StudentSearch>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.listedStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.email}</td>
                      <td>
                        <NavLink
                          to={`/students/${student.id}`}
                          className="btn btn-success btn-sm mx-1 my-2 text-white"
                        >
                          Details
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="h2 text-center my-3">Students List</div>
          <div className="d-flex">
            <div style={{ width: "50vw" }}>
              <StudentAdd addCallFromChild={this.addStudent}></StudentAdd>
            </div>
            <div style={{ width: "40vw" }}>
              <StudentSearch
                updateCallFromChild={this.updateRenderedList}
              ></StudentSearch>
              <div className="h3 text-center">
                Search Keyword doesn't match any student,
              </div>
              <div className="h3 text-center">please try another word.</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default StudentList;
