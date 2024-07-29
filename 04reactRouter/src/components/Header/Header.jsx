import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className=" w-9/12 m-auto p-3  flex justify-between">
          <div className="logo text-3xl w-max bg-gray-400 rounded-tl-md rounded-br-md">
            <h1 className="underline italic p-2">your Logo</h1>
          </div>
          <div className="pages p-3 ">
            <ul className="flex gap-x-9">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-600" : ""}`
                  }
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-600" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/github`}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-600 text-4xl" : ""}`
                  }
                >
                  Github
                </NavLink>
              </li>
              {/* we are fetching parameters from this element so no need to dispaly link */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-600" : ""}`
                  }
                  to="about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="left flex justify-evenly gap-3">
            <div className="login justify-center p-3">Log in</div>
            <div className="getStartBtn">
              <button className="bg-orange-700 rounded-md text-white p-3">
                Get Started
              </button>
            </div>
          </div>
        </nav>
        <hr />
      </header>
    </>
  );
}
