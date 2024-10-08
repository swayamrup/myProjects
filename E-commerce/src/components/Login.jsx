import { useState } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrUser, setisLogin, users } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrUser(getUser());
  };
  const registerClick = () => {
    navigate("/register");
  };
  const getUser = () => {
    if (users[username] && users[username].password === password) {
      setisLogin(true);
      return users[username];
    }
  };
  return (
    <>
      <div className="login flex flex-col items-center gap-2 text-black">
        <h1 className="text-white text-xl">Login Here...</h1>
        <form
          className="flex flex-col min-w-[300px] gap-5 bg-purple-100 p-3 rounded-md"
          // onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="rounded-md p-2"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-md p-2"
            autoComplete="true"
          />
          <p className="text-sm self-end italic px-2 text-blue-500 cursor-pointer">
            Forget Password...
          </p>

          <button onClick={handleSubmit} className="bg-200bg-blue-200">
            login
          </button>
          <p
            className="text-sm self-end italic px-2 text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            register new user
          </p>
        </form>
      </div>
    </>
  );
}
export default Login;
