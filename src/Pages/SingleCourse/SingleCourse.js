import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { _id, courses, price, description, img } = course;
  return (
    <>
      <div className="service pb-3">
        <img
          src={img}
          alt=""
          className="w-50 mt-2"
          style={{ height: "150px" }}
        />
        <h3>{courses}</h3>
        <h5>Price: {price}</h5>
        <p className="px-3">{description}</p>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-warning">Add Courses</button>
        </Link>
      </div>
    </>
  );
};

export default SingleCourse;
