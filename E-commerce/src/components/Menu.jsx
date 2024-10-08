import React, { useState } from "react";
import {
  imgLogout,
  imgNotification,
  imgOrders,
  imgsuperCoin,
  imgwishlist,
} from "../assets/menu_img/_menu_Img";
import { DownArrow, profile as imgProfile } from "../assets/nav_imgs/_nav_Img";

function Menu({ userName = "Login", compArray = [] }) {
  compArray = [
    { txt: "My Profile", img: imgProfile },
    { txt: "SuperCoin Zone", img: imgsuperCoin },
    { txt: "Orders", img: imgOrders },
    { txt: "Wishlist", img: imgwishlist },
    { txt: "Notifications", img: imgNotification },
    { txt: "Logout", img: imgLogout },
  ];
  const [showComp, setShowComp] = useState();
  return (
    <>
      <div
        className="username flex gap-2 items-center rounded-md px-2 min-w-36   "
        onMouseOver={() => setShowComp(true)}
        onMouseLeave={() => setShowComp(false)}
        title={userName}
      >
        <img src={imgProfile} alt="profilelogo" className="py-2" />
        <div>{userName}</div>
        <img
          src={DownArrow}
          alt="downArrow"
          className={`transition-[transform] ${showComp && "rotate-180"}`}
        />
      </div>
      {showComp && (
        <div
          className=" absolute w-52 z-30"
          onMouseEnter={() => setShowComp(true)}
          onMouseLeave={() => setShowComp(false)}
        >
          <div
            className={`outer rounded-md bg-white text-black p-3  dark:text-[#9ba0bd] dark:bg-[#353740]`}
          >
            {/* check if user is not login then filter logout comp from compArray */}
            {(userName === "Login"
              ? compArray.filter((comp) => comp.txt != "Logout")
              : compArray
            ).map((comp) => (
              <div
                className="flex gap-3 my-2 py-2 hover:font-medium cursor-pointer"
                title={comp.txt}
                key={comp.txt}
              >
                <img src={comp.img} alt={comp.txt} />
                <div>{comp.txt}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
