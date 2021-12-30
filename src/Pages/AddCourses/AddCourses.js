import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddCourses.css";

const AddCourses = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/courses", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <>
      <h2>add courses</h2>
      <div className="add-services">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="student name"
          /> */}
          <input {...register("courses")} placeholder="courses" />
          <input {...register("img")} placeholder="image" />
          <input type="number" {...register("price")} placeholder="price" />
          <textarea {...register("description")} placeholder="description" />

          <input type="submit" className="bg-success" />
        </form>
      </div>
    </>
  );
};

export default AddCourses;
