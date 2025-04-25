import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full fixed h-auto drop-shadow-md bg-white">
      <div className="mx-5 h-16 sm:mx-[10%] hide md:flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img className="size-12" src={logo} alt="logo" />
          <p>Prescription</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">All Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button>Create account</button>
      </div>
    </div>
  );
};

export default Navbar;
