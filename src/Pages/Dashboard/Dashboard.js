import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { useRouteMatch, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import DashboardHome from "./DashboardHome.js";
import AdminRoute from "../../Routes/AdminRoute.js";
import MakeAdmin from "../Admin/MakeAdmin.js";

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  console.log(admin);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const div = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            onClick={handleDrawerToggle}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="text-danger"
              >
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!admin && (
                  <div>
                    <Nav.Link
                      as={Link}
                      className="text-primary"
                      to="/AddCourses"
                    >
                      Add Courses
                    </Nav.Link>
                    <Nav.Link as={Link} className="text-primary" to="/students">
                      Students List
                    </Nav.Link>

                    <Nav.Link as={Link} className="text-primary" to="/courses">
                      Courses
                    </Nav.Link>
                    <Nav.Link as={Link} className="text-primary" to="/users">
                      Users
                    </Nav.Link>
                  </div>
                )}

                {admin && (
                  <div>
                    <Nav.Link
                      as={Link}
                      className="text-primary"
                      to="/makeAdmin"
                    >
                      Make Admin
                      <span>
                        <i class="fas fa-user-plus"></i>
                      </span>
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="text-primary"
                      to="/manageAllOrder"
                    >
                      Manage All Order
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="text-primary"
                      to="/addProduct"
                    >
                      Add Product
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="text-primary"
                      to="/manageProduct"
                    >
                      Manage Product
                    </Nav.Link>
                  </div>
                )}

                <Button onClick={() => logOut()} variant="primary">
                  Logout
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>

          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </div>
    </>
  );
}

export default Dashboard;
