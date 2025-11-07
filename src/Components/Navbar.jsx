// // // export default Navbar;
// import React, { use } from "react";
// import { NavLink, useNavigate } from "react-router";
// import catlogo from "../assets/cat-logo.jpg";
// import { AuthContext } from "../Context/AuthContext";

// const Navbar = () => {
//   const { user, logOut } = use(AuthContext);
//   //console.log(user);
//   const navigate = useNavigate();
//   const handleSignOut = () => {
//     logOut()
//       .then((res) => {
//         // console.log(res.user);
//         navigate("/");
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   };
//   return (
//     <div className="drawer drawer-end">

//       <input id="nav-drawer" type="checkbox" className="drawer-toggle" />


//       <div className="drawer-content">
//         <nav className="bg-black text-white flex justify-between items-center p-3 md:px-10">

//           <div>
//             <NavLink
//               to="/"
//               className="text-white cursor-pointer flex items-center gap-1"
//             >
//               <img
//                 className="h-5 rounded-full"
//                 src={catlogo}
//                 alt="preety-kitty"
//               />
//               <h2 className="text-sm sm:text-base font-semibold">
//                 WarmPaws
//               </h2>

//             </NavLink>
//           </div>


//           <div className="hidden md:flex justify-center items-center gap-8">
//             <NavLink
//               to="/"
//               className="text-white relative cursor-pointer group"
//             >
//               Home
//               <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink
//               to="servicesAll"
//               className="text-white relative cursor-pointer group"
//             >
//               Services
//               <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink
//               to="profile"
//               className="text-white relative cursor-pointer group"
//             >
//               My Profile
//               <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink to="user">
//               {user ? (
//                 <button
//                   onClick={() => handleSignOut()}
//                   className="flex items-center bg-gray-400 text-white px-4 py-2 rounded"
//                 >
//                   <div className="relative group flex items-center gap-2">
//                     <img
//                       className="h-8 rounded-full"
//                       src={user.photoURL}
//                       alt=""
//                     />
//                     Logout
//                     <span className="absolute top-full bg-black py-1 px-2 my-2 mx-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
//                       {user?.displayName}
//                     </span>
//                   </div>
//                 </button>
//               ) : (
//                 <button className="flex items-center bg-gray-400 text-white px-4 py-2 rounded">
//                   <i className="fa-solid fa-user mr-2"></i>
//                   Login
//                 </button>
//               )}
//             </NavLink>
//           </div>


//           <label
//             htmlFor="nav-drawer"
//             className="btn btn-ghost text-white drawer-button md:hidden"
//           >
//             <i className="fa-solid fa-bars text-xl"></i>
//           </label>
//         </nav>
//       </div>

//       <div className="drawer-side z-50">
//         <label htmlFor="nav-drawer" className="drawer-overlay"></label>
//         <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-2">
//               <img src={catlogo} alt="logo" className="h-6 rounded-full" />
//               <h2 className="font-semibold">PREETY-KITTY</h2>
//             </div>
//             <label htmlFor="nav-drawer" className="cursor-pointer text-xl">
//               <i className="fa-solid fa-xmark"></i>
//             </label>
//           </div>


//           <li>
//             <NavLink to="/" className="text-lg font-medium">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/servicesAll" className="text-lg font-medium">
//               Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="profile" className="text-lg font-medium">
//               My Profile
//             </NavLink>
//           </li>
//            <li>
//               <NavLink to="user">
//               {user ? (
//                 <button
//                   onClick={() => handleSignOut()}
//                   className="flex items-center bg-gray-400 text-white px-4 py-2 rounded"
//                 >
//                   <div className="relative group flex items-center gap-2">
//                     <img
//                       className="h-8 rounded-full"
//                       src={user.photoURL}
//                       alt=""
//                     />
//                     Logout
//                     <span className="absolute top-full bg-black py-1 px-2 my-2 mx-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
//                       {user?.displayName}
//                     </span>
//                   </div>
//                 </button>
//               ) : (
//                 <button className="flex items-center bg-gray-400 text-white px-4 py-2 rounded">
//                   <i className="fa-solid fa-user mr-2"></i>
//                   Login
//                 </button>
//               )}
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { NavLink, useNavigate } from "react-router";
import catlogo from "../assets/cat-logo.jpg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/servicesAll", label: "Services" },
    { path: "/profile", label: "My Profile" }
  ];

  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Navigation Bar */}
      <div className="drawer-content">
        <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo/Brand */}
              <NavLink
                to="/"
                className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
              >
                <img
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                  src={catlogo}
                  alt="WarmPaws Logo"
                />
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  WarmPaws
                </h2>
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ))}

                {/* User Section */}
                <div className="flex items-center space-x-4">
                  {user ? (
                    <div className="flex items-center space-x-3">
                      <div className="relative group">
                        <div className="flex items-center space-x-2 bg-gray-800 rounded-full pl-2 pr-4 py-1 hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                          <img
                            className="h-8 w-8 rounded-full ring-2 ring-gray-400"
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                          />
                          <span className="text-sm font-medium max-w-24 truncate">
                            {user.displayName || "User"}
                          </span>
                        </div>
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {user.displayName}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors duration-150"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to="/user"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <i className="fa-solid fa-user mr-2" />
                      Login
                    </NavLink>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <label
                htmlFor="nav-drawer"
                className="btn btn-ghost btn-circle text-white md:hidden hover:bg-gray-800 transition-colors duration-200"
              >
                <i className="fa-solid fa-bars text-xl" />
              </label>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay bg-black bg-opacity-50" />
        <div className="bg-white w-80 h-full shadow-xl">

          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src={catlogo}
                alt="WarmPaws Logo"
                className="h-8 w-8 rounded-full ring-2 ring-gray-300"
              />
              <h2 className="text-lg font-bold text-gray-900">WarmPaws</h2>
            </div>
            <label
              htmlFor="nav-drawer"
              className="btn btn-ghost btn-circle text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </label>
          </div>

          {/* Drawer Navigation */}
          <div className="p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-500"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`
                    }
                  >
                    <span className="font-medium">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile User Section */}
            <div className="mt-8 p-4 border-t border-gray-200">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      className="h-10 w-10 rounded-full ring-2 ring-gray-300"
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center space-x-2 bg-red-50 text-red-700 hover:bg-red-100 px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/user"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <i className="fa-solid fa-user" />
                  <span>Login to Account</span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;