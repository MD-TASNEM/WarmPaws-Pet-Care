// export default Navbar;
import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import catlogo from "../assets/cat-logo.jpg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then((res) => {
        // console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="drawer drawer-end">

      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />


      <div className="drawer-content">
        <nav className="bg-black text-white flex justify-between items-center p-3 md:px-10">

          <div>
            <NavLink
              to="/"
              className="text-white cursor-pointer flex items-center gap-1"
            >
              <img
                className="h-5 rounded-full"
                src={catlogo}
                alt="preety-kitty"
              />
              <h2 className="text-sm sm:text-base font-semibold">
                WarmPaws
              </h2>

            </NavLink>
          </div>


          <div className="hidden md:flex justify-center items-center gap-8">
            <NavLink
              to="/"
              className="text-white relative cursor-pointer group"
            >
              Home
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="servicesAll"
              className="text-white relative cursor-pointer group"
            >
              Services
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="profile"
              className="text-white relative cursor-pointer group"
            >
              My Profile
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink to="user">
              {user ? (
                <button
                  onClick={() => handleSignOut()}
                  className="flex items-center bg-gray-400 text-white px-4 py-2 rounded"
                >
                  <div className="relative group flex items-center gap-2">
                    <img
                      className="h-8 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    Logout
                    <span className="absolute top-full bg-black py-1 px-2 my-2 mx-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                      {user?.displayName}
                    </span>
                  </div>
                </button>
              ) : (
                <button className="flex items-center bg-gray-400 text-white px-4 py-2 rounded">
                  <i className="fa-solid fa-user mr-2"></i>
                  Login
                </button>
              )}
            </NavLink>
          </div>


          <label
            htmlFor="nav-drawer"
            className="btn btn-ghost text-white drawer-button md:hidden"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </label>
        </nav>
      </div>

      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={catlogo} alt="logo" className="h-6 rounded-full" />
              <h2 className="font-semibold">PREETY-KITTY</h2>
            </div>
            <label htmlFor="nav-drawer" className="cursor-pointer text-xl">
              <i className="fa-solid fa-xmark"></i>
            </label>
          </div>


          <li>
            <NavLink to="/" className="text-lg font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicesAll" className="text-lg font-medium">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" className="text-lg font-medium">
              My Profile
            </NavLink>
          </li>
           <li>
              <NavLink to="user">
              {user ? (
                <button
                  onClick={() => handleSignOut()}
                  className="flex items-center bg-gray-400 text-white px-4 py-2 rounded"
                >
                  <div className="relative group flex items-center gap-2">
                    <img
                      className="h-8 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    Logout
                    <span className="absolute top-full bg-black py-1 px-2 my-2 mx-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                      {user?.displayName}
                    </span>
                  </div>
                </button>
              ) : (
                <button className="flex items-center bg-gray-400 text-white px-4 py-2 rounded">
                  <i className="fa-solid fa-user mr-2"></i>
                  Login
                </button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
