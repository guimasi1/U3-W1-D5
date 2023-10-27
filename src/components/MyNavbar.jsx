import React, { Component } from "react";
import { Container, Navbar, Nav, Form, NavDropdown } from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Container className="bg-secondary ps-5 pe-4  ">
        <Navbar expand="lg" className="fs-2sm">
          <Navbar.Brand id="logo-container">
            <img
              className="w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-lightgrey">TV Shows</Nav.Link>
              </Nav.Item>

              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">Recently Added</Nav.Link>
              </Nav.Item>
              <Nav.Item className="cursor">
                <Nav.Link className="text-lightgrey">My List</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex align-items-center justify-content-end text-light flex-grow-1 text-end gap-3">
              <div className="gap-3 d-flex align-items-center">
                <i className="cursor bi bi-search"></i>
                <p className="cursor d-inline-block mt-3 text-light">KIDS</p>
                <i className="cursor bi bi-bell-fill"></i>
              </div>
              <NavDropdown title="" id="avatar" className="cursor">
                <img
                  src="src\Netflix-assets\Netflix-assets\assets\netflix_logo.png"
                  alt="avatar"
                  width="100%"
                  className=""
                />
                <NavDropdown.Menu className="bg-dark">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown.Menu>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default MyNavbar;
