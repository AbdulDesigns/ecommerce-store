import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className=" text-white  text-bold flex items-center justify-center p-4 mx-auto bg-black/90 shadow-lg shadow-green-950">
        <div className=" flex items-center gap-4 justify-between w-full max-w-[1200px]">
          <div className="logo text-2xl">
            <NavLink to="/">
              <img
                src="https://jhkarstentrans.co.za/wp-content/uploads/2020/07/logoipsum.png"
                width="150"
                height="50"
                loading="lazy"
                alt="Logo"
              />
            </NavLink>
          </div>
          <nav>
            <ul className="flex text-white items-center justify-between gap-4">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/countries"}>
                <li>Country</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>About</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
