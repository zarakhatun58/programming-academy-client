import React, { useRef } from "react";

const Users = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    e.preventDefault();
  };
  return (
    <div>
      <h2> Please Add Users</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} />
        <input type="email" name="" id="" ref={emailRef} />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default Users;
