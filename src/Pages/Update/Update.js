import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Update = () => {
  const [Booking, setBooking] = useState({});
  const [isUpdate, setIsUpdated] = useState(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const url = `https://arcane-river-42711.herokuapp.com/Bookings/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id, isUpdate]);
  // console.log(product)

  const onSubmit = (data) => {
    fetch(`https://arcane-river-42711.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("Modified successfully");
          setIsUpdated(true);
          reset();
        } else {
          setIsUpdated(false);
        }
      });
    console.log(data);
  };
  return (
    <div className="mx-auto my-5 w-50 text-center">
      <h2 className="mb-3">Update Booking Status</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-3"
          defaultValue={Booking?.status}
          {...register("status")}
          required
        />

        <input className="btn btn-success w-25" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
