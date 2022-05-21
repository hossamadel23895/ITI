import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"}>Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"mx-2"} to={"/students"}>Students</NavLink>
            <NavLink className={"mx-2"} to={"/about"}>About</NavLink>
            <NavLink className={"mx-2"} to={"/error"}>Error</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
