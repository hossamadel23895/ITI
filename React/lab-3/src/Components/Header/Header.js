import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
      <Navbar fixed="top"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"}>Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"mx-2"} to={"/artists"}>Artists</NavLink>
            <NavLink className={"mx-2"} to={"/about"}>About</NavLink>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
