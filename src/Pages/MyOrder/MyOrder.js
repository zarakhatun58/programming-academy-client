import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UseFirebase from "../../hooks/useFirebase.js";

const MyOrder = () => {
  const { user } = UseFirebase();
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    fetch(`https://arcane-river-42711.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user?.email]);

  const handleCancel = (id) => {
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
            const remainingProducts = myOrder.filter(
              (Booking) => Booking._id !== id
            );
            setMyOrder(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="my-Booking-area py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2 className="text-danger">My All Orders</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="Booking-single">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrder.map((Booking) => (
                    <tr key={Booking._id}>
                      <td>{Booking._id}</td>
                      <td>{Booking.name}</td>
                      <td>{Booking.price}</td>
                      <td>{Booking.status}</td>
                      <td>
                        <button
                          onClick={() => handleCancel(Booking._id)}
                          className="btn btn-danger ms-2"
                        >
                          Cancel
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleCancel(Booking._id)}
                          className="btn btn-success ms-2"
                        >
                          Pay
                        </button>
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

export default MyOrder;
