import React, { Fragment, useState } from "react";
import EditTable from "../EditTable/EditTable.js";
import data from "./../../students.json";
import SingleStudent from "./../SingleStudent/SingleStudent";
import { nanoid } from "nanoid";
import "./Student.css";

const Students = () => {
  const [contacts, setContacts] = useState(data);

  const [editContactId, setEditContactId] = useState(null);
  const [addData, setAddData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleAddDataChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newData = { ...addData };
    newData[fieldName] = fieldValue;
    setAddData(newData);
    console.log(newData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addData.name,
      address: addData.address,
      phone: addData.phone,
      email: addData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      name: editFormData.name,
      address: editFormData.address,
      phone: editFormData.phone,
      email: editFormData.email,
    };
    const newContacts = { ...contacts };
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      name: contact.name,
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContact = { ...contacts };
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContact.splice(index, 1);
    setContacts(newContact);
  };

  return (
    <>
      <h2 className="text-success">Students List</h2>
      <div className=" container mx-auto w-full ">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead className="bg-primary p-2">
              <tr className=" p-2">
                <th> Name </th>
                <th> Address</th>
                <th>Phone No</th>
                <th> Email</th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditTable
                      handleCancelClick={handleCancelClick}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleDeleteClick={handleDeleteClick}
                    />
                  ) : (
                    <SingleStudent
                      contact={contact}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <div className="mx-auto ">
          <h2 className="text-success mt-5">Add Students </h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="Name"
              required="required"
              placeholder="Enter a Name...."
              onChange={handleAddDataChange}
            />
            <input
              type="text"
              name="address"
              required="required"
              placeholder="Enter a address...."
              onChange={handleAddDataChange}
            />
            <input
              type="number"
              name="phone"
              required="required"
              placeholder="Enter a phone No...."
              onChange={handleAddDataChange}
            />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter a email...."
              onChange={handleAddDataChange}
            />
            <button type="submit"> Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Students;
