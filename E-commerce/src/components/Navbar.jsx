import {  useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import {
  _3Dot,
  Hamburger,
  croplogo,
  kart as karticon,
  mbDwnArow as mobileDownArrow,
  storeIcon,
  profile as profilelogo,
} from "../assets/nav_imgs/_nav_Img";
function Navbar({ className }) {
  const gotoHome = () => {
    navigate("/");
  };

  const navigate = useNavigate();
  const {
    currUser: user,
    setUsers,
    setCurrUser,
    setisLogin,
    isLogin,
  } = useUserContext();
  const logout = (e) => {
    if (e.target.innerText == "Logout") {
      setUsers((prev) => ({ ...prev, [user.username]: user }));
      setCurrUser({});
      setisLogin(false);
    }
    !isLogin && navigate("/login");
  };

  return (
    <>
      <div className="navbar  flex justify-between items-center gap-2 dark:text-[#d7dcfb] dark:bg-[#353740] sm:px-10">
        <div className="left">
          <div className="flex gap-2 p-1">
            <img
              src={Hamburger}
              alt="Hamburger"
              className=""
              onClick={() => {
                document.getElementById("root").classList.toggle("dark");
              }}
            />
            <img
              src={croplogo}
              alt="logo"
              className="min-w-20"
              onClick={gotoHome}
            />
          </div>
        </div>
        <span className="search hidden sm:block  sm:min-w-[30%] ">
          <SearchBar />
        </span>
        <div className="right">
          <div className="flex gap-2">
            <img src={mobileDownArrow} alt="mobileDownArrow" className="" />
            <div className="shortuserProfile flex sm:hidden">
              <img src={profilelogo} alt="profilelogo" className="" />
              <p className="text-black">You</p>
            </div>
            <div
              className="userProfile hidden sm:block relative"
              onClick={logout}
            >
              <Menu userName={user && user.username} />
            </div>

            <img
              src={karticon}
              alt="karticon"
              className=""
              onClick={() => navigate(isLogin ? "/cart" : "/login")}
            />

            <img src={storeIcon} alt="storeIcon" />

            <img src={_3Dot} alt="_3Dot" />
          </div>
        </div>
      </div>
      <div className="search px-2 sm:hidden  dark:text-[#d7dcfb] dark:bg-[#353740]">
          <SearchBar />
        </div>
        <hr className="p-1 dark:bg-[#353740]"/>
    </>
  );
}

export default Navbar;
