import React from "react";

const EditTable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter a Name...."
            value={editFormData.name}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter a address...."
            value={editFormData.address}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="number"
            name="phone"
            required="required"
            placeholder="Enter a phone No...."
            value={editFormData.phone}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          {" "}
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter a email...."
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <button type="submit">Save</button>{" "}
          <button type="submit" onClick={handleCancelClick}>
            Cancel
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default EditTable;
