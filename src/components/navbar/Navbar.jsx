import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./CustomNavbar.css";
import Logo from "../../assets/logo.png";

const CustomNavbar = () => {
  return (
    <>
      <NavbarBS expand="lg" bg="primary" variant="dark" className="pb-4 pt-4">
        <Container>
          <NavbarBS.Brand href="#home" className="navbar-brand">
            <img
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top logo"
              alt="Company Logo"
              border-radius="50%"
            />
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBS.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4">
                  Our Commitments
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Message from Principal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Meet Our Team
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Our Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Transportation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Labs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Library</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Canteen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Hostel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Our Clubs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Social Works
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">ECA</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Latest News and Events</Nav.Link>
            </Nav>

            {/* Sign In dropdown moved to the end */}
            <Nav>
              <NavDropdown
                title="Sign In"
                id="basic-nav-dropdown"
                className="sign-in-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">
                  SignIn as Admin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  SignIn as Teacher
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  SignIn as Student/Parents
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
};

export default CustomNavbar;
