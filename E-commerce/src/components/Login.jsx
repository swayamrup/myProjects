import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrUser, setisLogin, users, isLogin, setUsers } =
    useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getUser();
    user && setCurrUser(user);
  };

  const getUser = () => {
    if (users[username] && users[username].password === password) {
      setisLogin(true);
      return users[username];
    } else return {};
  };
  useEffect(() => {
    isLogin && navigate("/");
  }, [isLogin]);
  return (
    <>
      <div className="login flex flex-col items-center gap-2 h-[100vh] text-black dark:text-[#dce1fd] dark:bg-[#2d2f36]">
        <h1 className="text-xl">Login Here...</h1>
        <form
          className="flex flex-col min-w-[300px] gap-5 p-3 rounded-md border bg-slate-200 dark:text-[#dce1fd] dark:bg-[#2d2f36]"
          // onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="rounded-md p-2 text-black"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-md p-2 text-black"
            autoComplete="true"
          />

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
