import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profileImg from "../assets/images/profile_pic.jpg";
import Button from "./Button";
import * as motion from "motion/react-client";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="w-full fixed h-auto drop-shadow-md bg-white">
      <div className="mx-5 h-16 sm:mx-[10%] md:flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer gap-2"
        >
          <img className="size-12" src={logo} alt="logo" />
          <p className="logo font-bold text-2xl md:text-3xl text-fuchsia-700">
            Prescription
          </p>
        </div>
        <ul className="navlist hidden md:flex items-center gap-4 uppercase text-sm">
          <li className="hover:text-fuchsia-700 font-medium hover:transition-all duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-fuchsia-700 font-medium hover:transition-all duration-200">
            <NavLink to="/doctors">All Doctors</NavLink>
          </li>
          <li className="hover:text-fuchsia-700 font-medium hover:transition-all duration-200">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-fuchsia-700 font-medium hover:transition-all duration-200">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {token ? (
          <div className="flex items-center gap-2 relative group ">
            <img
              className="size-8 rounded-full cursor-pointer "
              src={profileImg}
              alt="profile pic"
            />

            <motion.div
              whileHover={{
                right: 0,
                opacity: 1,
                transition: { duration: 0.3 },
              }}
              className="absolute top-0 right-['-50%'] opacity-0"
            >
              <ul className="w-48 bg-gray-100 flex-col gap-2 p-5 mt-12 hidden group-hover:block">
                <li
                  className="hover:text-fuchsia-700 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </li>
                <li
                  className="hover:text-fuchsia-700 cursor-pointer"
                  onClick={() => navigate("/my-appionments")}
                >
                  My Appoinments
                </li>
                <li
                  className="hover:text-fuchsia-700 cursor-pointer"
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
            className="bg-fuchsia-700 text-white px-6 py-2 rounded-full"
          >
            Create account
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
