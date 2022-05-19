import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function StudentDetails(props) {
  let userId = useParams().id;
  let allStudents = props.allStudents;
  let currentStudent = allStudents.find((student) => student.id == userId);
  console.log(currentStudent);
  return (
    <div className="w-50 mx-auto">
      <div className="h2 text-center mx-auto my-4">Student Details</div>
      <Card bg="dark" key="dark" className="mb-2">
        <Card.Header className="h5 text-center">
          Student {currentStudent.id} Details
        </Card.Header>
        <Card.Body>
          <Card.Text>Student ID : {currentStudent.id}</Card.Text>
          <Card.Text>Student Name : {currentStudent.name}</Card.Text>
          <Card.Text>Student Age : {currentStudent.age}</Card.Text>
          <Card.Text>Student Email : {currentStudent.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StudentDetails;
