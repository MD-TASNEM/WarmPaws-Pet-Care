import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
  const { createUser,user,setUser,updateUser} = use(AuthContext);
  //console.log({createUser})
  const [showPass, setShowPass] = useState(false);
  const navigate=useNavigate();

  const handlePass = () => {
    setShowPass(!showPass);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    
   
    const firstName = e.target.firstName.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

     const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const isLongEnough = password.length >= 6;

  if (!hasUppercase) {
    toast.error("Password must contain at least 1 uppercase letter.");
    return;
  }
  if (!hasLowercase) {
    toast.error("Password must contain at least 1 lowercase letter.");
    return;
  }
  if (!isLongEnough) {
    toast.error("Password must be at least 6 characters long.");
    return;
  }
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        updateUser({displayName:firstName,photoURL:photo})
        .then(()=>{
          setUser({...user,displayName:firstName,photoURL:photo});
          toast.success("Successfully registered!");
        })
        .catch(err=>{
          toast.error(err.message)
          setUser(user);
          toast.error(e.message)
        })
        
        navigate('/');
       
      })
      .catch((err) => {
        // console.log(err.message);
        toast.error("Wrong Credential");
      });
  };

  

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-2 sm:mt-4  mb-10 ">
        <div className="text-center">
          <h1 className="text-4xl my-2">register</h1>
          <h1>Please enter your Details:</h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              <label className="label ">First Name:</label>
              <input
                type="text"
                name="firstName"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter first name"
              />
              <label className="label ">Last Name:</label>
              <input
                type="text"
                name="text"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter last name"
              />
              <label className="label ">Photo-URL:</label>
              <input
                type="text"
                name="photo"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter URL"
              />

              {/* Email Field */}

              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter email"
              />

              {/* Passwword Field */}
              <label className="label">Password:</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                  placeholder="Enter password"
                />
                <span
                  className="absolute top-3 right-3 sm:top-4"
                  onClick={() => handlePass()}
                >
                  {showPass ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>

              <div className="my-2">
                <input type="checkbox" className="checkbox " required />
                <span className="m-2">
                  I have read and agree to the Terms and Conditions
                </span>
              </div>

              <button className=" btn btn-neutral mt-3 sm:w-[400px] border-none relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Register
                </span>
                <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full "></span>
              </button>
              <p className="my-2 text-center">
                Have an account?
                <Link to="/user">
                  <span className="border-b border-b-black ">Sign in</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
