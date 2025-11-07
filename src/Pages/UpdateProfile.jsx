// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { useNavigate } from "react-router";
// import toast from "react-hot-toast";


// const UpdateProfile = () => {
//   const { user, setUser, loading, updateUser } = use(AuthContext);
//   //console.log(user, loading,updateUser);
//   const navigate = useNavigate();
//   if (loading) {
//     return <p>Loading......</p>;
//   }
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const userName=e.target.userName.value;

//     const photo=e.target.photo.value;
//     //console.log(userName,photo);
//     updateUser({ displayName:userName,photoURL:photo})
//     .then(()=>{
//         setUser({...user,displayName:userName,photoURL:photo})
//         toast.success('Succesfully Updated')
//         e.target.reset()
//     }).catch(()=>{
//         setUser(user);
//          toast.error(e.message);
//     })

//     // navigate("/");
//   };
//    const handleHome=()=>{
//         navigate('/')
//     }
//   return (
//     <div className="bg-gray-100 min-h-screen overflow-x-hidden">
//       <div className=" sm:w-10/12 md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
//         <div className=" h-auto max-h-[500px] p-5 md:p-10 flex justify-center">
//           <div className="rounded-2xl shadow-lg w-full max-w-sm relative bg-white">
//             <div className="bg-blue-500 h-32 w-full rounded-t-lg"></div>

//             <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:left-32 md:translate-x-0">
//               <img
//                 className="rounded-full w-24 h-24 md:w-28 md:h-28 border-4 border-white object-cover"
//                 src={user.photoURL || ""}
//                 alt={user.displayName || "User"}
//               />
//             </div>

//             <div className="mt-20 text-center pb-6 px-5 md:px-0">
//               <h2 className="text-xl md:text-2xl font-bold">
//                 {user.displayName || "No Name"}
//               </h2>
//               <p className="mt-2 text-gray-500 text-sm">
//                 <span className="font-semibold">Id: </span>
//                 {user.uid}
//               </p>
//               <p className="text-gray-500 mt-1 text-sm">
//                 <span className="font-semibold">Email: </span>
//                 {user.email}
//               </p>

//               <button
//                 onClick={handleHome}
//                 className="btn btn-soft btn-accent mt-6 w-36 md:w-40"
//               >
//                 Home
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-5 md:p-10 flex justify-center">
//           <form onSubmit={handleUpdate} className="w-full max-w-md">
//             <fieldset className="fieldset flex flex-col gap-4">
//               <label className="label">Email:</label>
//               <input
//                 type="email"
//                 name="email"  readOnly
//                 className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
//                 placeholder={user.email}
//               />
//               <label className="label">Name:</label>
//               <input
//                 type="text"
//                 name="userName" required
//                 className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
//                 placeholder="Enter new name"
//               />


//               <label className="label">URL:</label>
//               <input
//                 type="text"
//                 name="photo" required
//                 className="input w-full sm:w-full sm:h-[50px] border-2 border-gray-400 focus:outline-none"
//                 placeholder="Enter new photo"
//               />

//               <button className="btn btn-neutral mt-3 w-full sm:w-full relative group">
//                 <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//                   Update Profile
//                 </span>
//                 <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full group-hover:text-black"></span>
//               </button>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;


import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, setUser, loading, updateUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading profile data...</p>
        </div>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    const photo = formData.get("photo");

    try {
      await updateUser({ displayName: userName, photoURL: photo });
      setUser({ ...user, displayName: userName, photoURL: photo });
      toast.success('Profile updated successfully!', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#fff',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        },
      });
      e.target.reset();
    } catch (error) {
      setUser(user);
      toast.error('Failed to update profile. Please try again.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        },
      });
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={handleHome}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Update Profile</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep your profile information up to date
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Profile Preview */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full max-w-md">
              <div className="relative">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                {/* Profile Image */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg bg-white p-1">
                      {user.photoURL ? (
                        <img
                          className="w-full h-full rounded-xl object-cover"
                          src={user.photoURL}
                          alt={user.displayName || "User"}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className={`w-full h-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${user.photoURL ? 'hidden' : 'flex'}`}
                      >
                        <span className="text-2xl font-bold text-gray-600">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Profile Info */}
              <div className="pt-16 pb-8 px-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {user.displayName || "No Name Provided"}
                </h2>
                <p className="text-gray-500 text-sm mb-6">Current Profile</p>

                <div className="space-y-3 text-left bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Email:</span>
                    <span className="text-sm text-gray-900 font-medium">{user.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">User ID:</span>
                    <span className="text-sm text-gray-900 font-mono">
                      {user.uid.substring(0, 8)}...
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Last Updated:</span>
                    <span className="text-sm text-gray-900">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Update Form */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md p-8">
              <form onSubmit={handleUpdate} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-not-allowed"
                      value={user.email}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                {/* Display Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="userName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      defaultValue={user.displayName || ''}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Photo URL Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo URL
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      name="photo"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/photo.jpg"
                      defaultValue={user.photoURL || ''}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Enter a valid image URL</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Update Profile
                  </button>
                </div>

                {/* Help Text */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Profile updates may take a few moments to reflect across all devices.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;