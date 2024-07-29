import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (user) {
    if (user.password) {
      return (
        <>
          <h1>welcome {user.username}</h1>
          <h1> your password is {user.password}</h1>
        </>
      );
    }
    return (
        <>
          <h1>welcome {user.username}</h1>
        </>
      );
  }
  return <h1>login please!</h1>;
}

export default Profile;
