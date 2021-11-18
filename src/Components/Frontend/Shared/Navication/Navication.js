import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/Firebase/useAuth";

const Navication = () => {
  const { user, LogOut } = useAuth();
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/yBY0Hk3/logo.png"
            className="w-100"
            style={{ height: "50px" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "#fff" }} as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            {(user?.email && (
              <>
                <Nav.Link as={Link} to="/dashboard" style={{ color: "#fff" }}>
                  Dashboard
                </Nav.Link>
                <Nav.Link style={{ color: "#fff" }}>
                  {user?.displayName}
                </Nav.Link>
                <Button onClick={LogOut}>Logout</Button>
              </>
            )) || (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navication;
