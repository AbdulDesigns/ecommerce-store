import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center  w-full shadow-lg p-4 bg-white">
        <ul className="flex justify-between items-center w-1/2 transition-all duration-300 ease-in">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-bold active"
                  : "text-black text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-bold active"
                  : "text-black text-lg"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/countries"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-bold active"
                  : "text-black text-lg"
              }
            >
              Countries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-bold active"
                  : "text-black text-lg"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
