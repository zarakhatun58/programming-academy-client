import React, { useEffect, useState } from "react";
import "./Courses.css";
import SingleCourse from "./../SingleCourse/SingleCourse";
import _ from "lodash";
import axios from "axios";

const pageSize = 10;
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [paginatedCourses, setPaginatedCourses] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/courses").then((res) => {
      console.log(res.data);
      setCourses(res.data);
      setPaginatedCourses(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/courses")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));

  //   setPaginatedCourses(_(setCourses).slice(0).take(pageSize).value());
  // }, []);

  const pageCount = courses ? Math.ceil(courses.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedCourses = _(courses)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedCourses(paginatedCourses);
  };

  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our Courses</h2>
      <div className="service-container">
        {courses.map((course) => (
          <SingleCourse key={course.price} course={course}></SingleCourse>
        ))}
      </div>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item-active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {" "}
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Courses;
