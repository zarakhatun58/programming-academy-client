import React, { useState } from "react";
import { Pagination } from "antd";
import SingleCourse from "./../SingleCourse/SingleCourse";

const PaginationAll = () => {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [total, setTotal] = useState("");
  const [courses, setCourses] = useState([]);

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentCourses = courses.slice(indexOfFirstPage, indexOfLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a> Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <div>
      <div>
        {currentCourses.map((course) => (
          <SingleCourse key={course.price} course={course}></SingleCourse>
        ))}

        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={1}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        ></Pagination>
      </div>
    </div>
  );
};

export default PaginationAll;
