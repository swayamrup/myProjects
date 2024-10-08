import { useEffect, useRef, useState } from "react";
import { UserProvider } from "./context/userContext";

import MyRouter from "./EssencialComp/MyRouter";

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || {});
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("currUser")) || {}
  );
  const [isLogin, setisLogin] = useState(currUser.username&&true||false);
  const cart = currUser.cart;
  const setUserCart = (item) => {
    setCurrUser((prev) => ({ ...prev, cart: item }));
  };

  console.log(currUser);
  console.log(isLogin);

  const discountPrice = (price, discountPercent) => {
    return price - (discountPercent * price) / 100;
  };

  useEffect(() => {
    localStorage.setItem("currUser", JSON.stringify(currUser));
    localStorage.setItem("users", JSON.stringify(users));
  }, [currUser,users]);

  return (
    <UserProvider
      value={{
        currUser,
        setCurrUser,
        discountPrice,
        setUserCart,
        cart,
        users,
        setUsers,
        isLogin, setisLogin
      }}
    >
      <MyRouter />
    </UserProvider>
  );
}

export default App;
