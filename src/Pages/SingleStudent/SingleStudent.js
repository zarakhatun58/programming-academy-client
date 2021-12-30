import React from "react";

const SingleStudent = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <tr className="p-2 border bg-light">
        <td className="p-2 border">{contact.name} </td>
        <td className="p-2 border">{contact.address} </td>
        <td className="p-2 border">{contact.phone}</td>
        <td className="p-2 border">{contact.email}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(event) => handleDeleteClick(contact.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleStudent;
