import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profileImg from "../assets/images/profile_pic.jpg";
import dropdownIcon from "../assets/images/dropdown_icon.svg";
import Button from "./Button";
import * as motion from "motion/react-client";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full fixed h-auto drop-shadow-md bg-white z-20">
      <div className=" flex mx-5 h-16 sm:mx-[10%] md:flex justify-between items-center">
        <div
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="flex items-center cursor-pointer gap-2"
        >
          <img className="size-12" src={logo} alt="logo" />
          <p className="logo font-bold text-2xl md:text-3xl bg-linear-to-r from-violet-500 to-violet-900 text-transparent bg-clip-text">
            Prescriptory
          </p>
        </div>
        <ul className="navlist hidden md:flex items-center gap-4 uppercase text-sm">
          <li className="hover:text-violet-600 font-medium hover:transition-all duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-violet-600 font-medium hover:transition-all duration-200">
            <NavLink to="/doctors">All Doctors</NavLink>
          </li>
          <li className="hover:text-violet-600 font-medium hover:transition-all duration-200">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-violet-600 font-medium hover:transition-all duration-200">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {token ? (
          <div className="relative group h-auto flex items-center gap-2">
            <img
              className="size-8 rounded-full cursor-pointer "
              src={profileImg}
              alt="profile pic"
            />
            <img className="size-2" src={dropdownIcon} alt="dropdown icon" />

            <motion.div
              whileHover={{
                right: 0,
                opacity: 1,
                transition: { duration: 0.3 },
              }}
              className="w-52 h-auto absolute top-0 right-[-20px] opacity-0 "
            >
              <ul className="w-full  bg-gray-100 flex-col p-4 mt-12 group-hover:flex hidden">
                <li
                  className="hover:text-fuchsia-700 cursor-pointer bg-white px-4 py-2 mb-2"
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </li>
                <li
                  className="hover:text-fuchsia-700 cursor-pointer bg-white px-4 py-2 mb-2"
                  onClick={() => navigate("/my-appionments")}
                >
                  My Appoinments
                </li>
                <li
                  className="hover:text-fuchsia-700 cursor-pointer bg-white px-4 py-2"
                  onClick={() => {
                    setToken(false), navigate("/");
                  }}
                >
                  Logout
                </li>
              </ul>
            </motion.div>
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="bg-linear-to-r from-violet-600 to-violet-900 text-white "
          >
            Create account
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
