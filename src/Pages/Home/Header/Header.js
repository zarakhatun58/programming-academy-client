import { Box } from "@mui/material";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        bg="white"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img src="" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-dark" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-dark" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-primary" to="/courses">
              Courses
            </Nav.Link>

            <Navbar.Text className="text-dark">
              <span className="text-dark">{user?.displayName}</span>
            </Navbar.Text>

            {user?.email ? (
              <Box>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "10px",
                  }}
                  to="/dashboard"
                >
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
