import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function AdminNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or session data
    // For example, you may remove the token from localStorage
    localStorage.clear("token");

    // Redirect the user to the login page
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "red", letterSpacing: "0.5em" }}>
          TMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#/adminpage">Home</Nav.Link>
            <Nav.Link href="#/register">Create New User</Nav.Link>
            <Nav.Link href="#/busallowcate">Bus</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button onClick={handleLogout} variant="outline-success">LogOut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
