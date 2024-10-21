import React, { useState } from "react";
import { useUserContext } from "../context/userContext";

function Register() {
  const [newUser, setNewUser] = useState({ cart: [] });
  //   const [error,setError]=useState({});

  const { setUsers } = useUserContext();

  const handleRegister = (e) => {
    e.preventDefault();
    newUser.username &&
      setUsers((prev) => ({ ...prev, [newUser.username]: newUser }));
  };
  const handleChange = (e) => {
    if (e.target.id) {
      setNewUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  return (
    <div className="h-[100vh] dark:text-[#dce1fd] dark:bg-[#2d2f36]">
      <form className="flex flex-col items-center text-black">
        <input
          type="text"
          id="username"
          placeholder="username or email"
          className="p-2 "
          onChange={handleChange}
        />

        <input
          type="text"
          id="password"
          placeholder="password"
          className="p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          id="conformPassword"
          placeholder="conform password"
          className="p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          id="Mobile"
          placeholder="mobile Number"
          className="p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          id="address"
          placeholder="address"
          className="p-2"
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
