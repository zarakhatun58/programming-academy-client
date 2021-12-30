import React from "react";
import { Spinner } from "react-bootstrap";
import SingleDelete from "./SingleDelete";
import { useState } from "react";
import { useEffect } from "react";

const Delete = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://arcane-river-42711.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  return (
    <div className="add-food py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-4">
              <h4 className="text-danger">Manage All Courses </h4>
            </div>
          </div>
        </div>
        {courses.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <div className="row">
            {courses.map((course) => (
              <SingleDelete key={course._id} course={course}></SingleDelete>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Delete;
