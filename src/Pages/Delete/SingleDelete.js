import React from "react";
import { useState } from "react";

const SingleDelete = ({ course }) => {
  const [manageProduct, satManageProduct] = useState([]);
  const { _id, name, price, description, img } = course;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://arcane-river-42711.herokuapp.com/product/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = manageProduct.filter(
              (order) => order?._id !== id
            );
            satManageProduct(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="col-lg-4">
      <div className="card mb-3 p-3">
        <img src={img} alt="" />
        <div className="d-flex justify-content-between my-3">
          <h4 className="my-3">{name}</h4>
        </div>
        <h3>Price: $ {price}</h3>
        <p className="text-justify">{description.slice(0, 100)}</p>
        <div className="text-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-danger w-100"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDelete;
