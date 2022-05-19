import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Header from "./Components/Core/Header/Header";
import Home from "./Components/Home";
import StudentsData from "./Components/Student/students.json";
import StudentsList from "./Components/Student/StudentList/StudentList";
import StudentDetails from "./Components/Student/StudentDetails/StudentDetails";
import StudentAdd from "./Components/Student/StudentAdd/StudentAdd.js";
import Error from "./Components/Error.js";
import About from "./Components/About.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allStudents: StudentsData.students,
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route
              path="/students/"
              element={<StudentsList allStudents={this.state.allStudents} />}
            />
            <Route
              path="/students/:id"
              element={<StudentDetails allStudents={this.state.allStudents} />}
            />
            <Route path="/students/add" element={<StudentAdd />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
