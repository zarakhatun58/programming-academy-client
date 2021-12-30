import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AuthProvider from "./contexts/AuthProvider.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Students from "./Pages/Students/Students";
import Courses from "./Pages/Courses/Courses";
import SingleStudent from "./Pages/SingleStudent/SingleStudent.js";
import Footer from "./Pages/Footer/Footer.js";
import Users from "./Pages/Users/Users.js";
import AddCourses from "./Pages/AddCourses/AddCourses.js";
import SingleCourse from "./Pages/SingleCourse/SingleCourse";
import PrivateRoute from "./Routes/PrivateRoute";
import Booking from "./Pages/Booking/Booking";
import ManageAllCourse from "./Pages/ManageAllCourse/ManageAllCourse";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Update from "./Pages/Update/Update";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route path="/singleStudent">
              <SingleStudent />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/addCourses">
              <AddCourses />
            </Route>
            <Route path="/singleCourse">
              <SingleCourse />
            </Route>
            <PrivateRoute exact path="/Booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllCourse">
              <ManageAllCourse />
            </PrivateRoute>

            <PrivateRoute exact path="/manageProduct">
              {/* <ManageProduct /> */}
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrder />
            </PrivateRoute>

            <Route exact path="/update/:id">
              <Update />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
