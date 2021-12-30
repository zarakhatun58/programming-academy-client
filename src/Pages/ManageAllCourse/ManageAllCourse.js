import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ManageAllCourse = () => {
  const [Bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://arcane-river-42711.herokuapp.com/orders/")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://arcane-river-42711.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = Bookings.filter(
              (Booking) => Booking._id !== id
            );
            setBookings(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="manage-Booking-area py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-12 col-md-8 col-sm-6">
            <div className="section-title text-center">
              <h3 className="text-danger">Manage All Orders</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="">
            <div className="Booking-single">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Bookings.map((Booking) => (
                    <tr key={Booking._id}>
                      <td>{Booking._id}</td>
                      <td>{Booking.name}</td>
                      <td>{Booking.price}</td>
                      <td>{Booking.status}</td>
                      <td>
                        <Link to={`/update/${Booking._id}`}>
                          <button className="btn btn-primary">Update</button>
                        </Link>

                        <button
                          onClick={() => handleDelete(Booking._id)}
                          className="btn btn-danger ms-2"
                        >
                          Delete
                        </button>
                        <Link to={`/dashboard/payment/${Booking._id}`}>
                          <button className="btn btn-success">Paid</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllCourse;
