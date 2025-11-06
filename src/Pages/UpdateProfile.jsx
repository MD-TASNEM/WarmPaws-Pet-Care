import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

   
const UpdateProfile = () => {
  const { user, setUser, loading, updateUser } = use(AuthContext);
  //console.log(user, loading,updateUser);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading......</p>;
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const userName=e.target.userName.value;   
     
    const photo=e.target.photo.value;
    //console.log(userName,photo);
    updateUser({ displayName:userName,photoURL:photo})
    .then(()=>{
        setUser({...user,displayName:userName,photoURL:photo})
        toast.success('Succesfully Updated')
        e.target.reset()
    }).catch(()=>{
        setUser(user);
         toast.error(e.message);
    })
   
    // navigate("/");
  };
   const handleHome=()=>{
        navigate('/')
    }
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <div className=" sm:w-10/12 md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        <div className=" h-auto max-h-[500px] p-5 md:p-10 flex justify-center">
          <div className="rounded-2xl shadow-lg w-full max-w-sm relative bg-white">
            <div className="bg-blue-500 h-32 w-full rounded-t-lg"></div>

            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:left-32 md:translate-x-0">
              <img
                className="rounded-full w-24 h-24 md:w-28 md:h-28 border-4 border-white object-cover"
                src={user.photoURL || ""}
                alt={user.displayName || "User"}
              />
            </div>

            <div className="mt-20 text-center pb-6 px-5 md:px-0">
              <h2 className="text-xl md:text-2xl font-bold">
                {user.displayName || "No Name"}
              </h2>
              <p className="mt-2 text-gray-500 text-sm">
                <span className="font-semibold">Id: </span>
                {user.uid}
              </p>
              <p className="text-gray-500 mt-1 text-sm">
                <span className="font-semibold">Email: </span>
                {user.email}
              </p>

              <button
                onClick={handleHome}
                className="btn btn-soft btn-accent mt-6 w-36 md:w-40"
              >
                Home
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-10 flex justify-center">
          <form onSubmit={handleUpdate} className="w-full max-w-md">
            <fieldset className="fieldset flex flex-col gap-4">
              <label className="label">Email:</label>
              <input
                type="email"
                name="email"  readOnly
                className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                placeholder={user.email}
              />
              <label className="label">Name:</label>
              <input
                type="text"
                name="userName" required
                className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                placeholder="Enter new name"
              />
               

              <label className="label">URL:</label>
              <input
                type="text"
                name="photo" required
                className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                placeholder="Enter new photo"
              />

              <button className="btn btn-neutral mt-3 w-full sm:w-full relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Update Profile
                </span>
                <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full group-hover:text-black"></span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
