import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, NavLink, useNavigate } from "react-router";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);
  // console.log(user, loading);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading......</p>;
  }
  const handleUpdate = () => {
    //<NavLink to='/updateprofile'></NavLink>
    navigate("/updateprofile");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e5e7eb] p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm relative">
        <div className="bg-blue-500 h-32 w-full"></div>

        <div className="absolute top-16 left-32">
          <img
            className="rounded-full w-28 h-28 border-4 border-white object-cover"
            src={user.photoURL || "Upload your Pic "}
            alt={user.displayName || "User"}
          />
        </div>

        <div className="mt-16 text-center pb-6">
          <h2 className="mt-16 text-xl font-bold">
            {user.displayName || "No Name"}
          </h2>
          <p className="mt-4 text-gray-500">
            <span className="font-semibold text-sm">Id : </span>
            {user.uid}
          </p>
          <p className="text-gray-500 mt-2">
            <span className="font-semibold text-sm">Email:</span>
            {user.email}
          </p>

          <button
            onClick={handleUpdate}
            className="btn btn-soft btn-accent mt-6"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
