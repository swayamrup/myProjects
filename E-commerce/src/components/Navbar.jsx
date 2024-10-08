import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Menu from "./Menu";
import {
  _3Dot,
  Hamburger,
  croplogo,
  kart as karticon,
  mbDwnArow as mobileDownArrow,
  searchIcon,
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
    !isLogin&&navigate("/login")
  };





  return (
    <>
      <div
        className={`"header flex px-3 py-1  items-center justify-between lg:px-12" ${className}  dark:text-[#d7dcfb] dark:bg-[#353740]`}
      >
        <div className="left flex gap-x-2">
          <img
            src={Hamburger}
            alt="Hamburger "
            className=""
            onClick={() => {
              document.getElementById("root").classList.toggle("dark");
            }}
          />
          <img
            src={croplogo}
            alt="logo"
            className="min-w-[20px]"
            onClick={gotoHome}
          />
        </div>

        {/* search box  hidden when sereen < md */}
        <div className="search bg-[#f0f5ff] px-4 py-1 justify-center m-3 rounded-md hidden sm:flex   dark:bg-[#353740]">
          <img src={searchIcon} alt="searchIcon" className="min-w-[19px]" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className=" bg-[#f0f5ff] min-w-[300px] p-2 md:min-w-[400px] sm:py-1  outline-none  dark:bg-[#353740]"
          />
        </div>
        <div className="right ">
          <div className="flex items-stretch gap-x-3">
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
            {/* <img src={karticon} alt="karticon" className="" /> */}
            <Link to={isLogin ? "/cart" : "/login"} className="self-center">
              <img src={karticon} alt="karticon" className="" />
            </Link>
            <Link to={""} className="self-center">
              <img src={storeIcon} alt="storeIcon" />
            </Link>
            <img src={_3Dot} alt="_3Dot" />
          </div>
        </div>
      </div>
      {/* search box  hidden when sereen > md   */}
      <div className="search flex bg-[#f0f5ff] px-4 py-1 justify-start m-3 rounded-md sm:hidden">
        <img src={searchIcon} alt="searchIcon" className="min-w-[15px] " />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className=" bg-[#f0f5ff] px-2  text-black "
        />
      </div>
    </>
  );
}

export default Navbar;
