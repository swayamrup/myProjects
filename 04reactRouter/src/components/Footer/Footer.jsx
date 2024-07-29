import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="w-9/12 m-auto p-3 flex justify-between gap-2">
          <div className="logo text-3xl h-min bg-gray-400 rounded-tl-md rounded-br-md">
            <h1 className="underline italic p-2">your Logo</h1>
          </div>

          <div className="right">
            <div className="top">
              <ul className="grid grid-cols-3 gap-6 font-medium pb-2">
                <li>
                  <h3>Resources</h3>
                </li>
                <li>
                  <h3>Follow Us</h3>
                </li>
                <li>
                  <h3>Legal</h3>
                </li>
              </ul>
            </div>
            <div>
              <ul className="grid grid-cols-3 gap-4">
                <li>
                  <NavLink
                    to="/"
                    className={({isActive}) =>
                      `${isActive ? "text-green-500" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="about">About</NavLink>
                </li>
                <li>
                  <NavLink
                    to="github"
                    className={( {isActive} ) =>
                      `${isActive ? "text-green-500" : ""}`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink to="discord">Discord</NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="#">Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="buttom w-9/12 m-auto p-3 flex justify-between gap-2">
          <div className="copyright ">
            <p className="font-thin">@2024swayamrup. All Right Reserved</p>
          </div>
        </div>
        <hr />
      </footer>
    </>
  );
}

export default Footer;
