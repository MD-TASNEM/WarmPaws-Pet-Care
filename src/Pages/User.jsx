import React, { use, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const User = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn, signInWithGoogle } = use(AuthContext);
  const [curEmail, setCurEmail] = useState();
  //console.log(forgetpass)
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();
  // console.log(location);

  const handlePass = () => {
    setShowPass(!showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
    signIn(email, password)
      .then((res) => {
        // console.log(res);

        toast.success("Logged in");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(e.message);
      });

    navigate("/");
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        res.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
          toast.error("Wrong Credential");
      });
  };

  const handleForget = () => {
    // console.log(curEmail);

    if (curEmail) {
      navigate("/forgetpass", { state: { email: curEmail } });
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 mb-10">
        <div className="text-center">
          <h1 className="text-4xl my-2">Login</h1>
          <h1>Please enter your e-mail and password:</h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email Field */}

              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                onChange={(e) => setCurEmail(e.target.value)}
                className="input sm:w-[400px] sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />

              {/* Passwword Field */}
              <label className="label">Password:</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                  placeholder="Enter your password"
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
              <div>
                <button onClick={handleForget} className="link link-hover">
                  Forgot password?
                </button>
              </div>

              <button className="btn btn-neutral mt-3 sm:w-[400px] border-none relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Login
                </span>
                <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300  group-hover:w-full group-hover:text-black "></span>
              </button>
              <p className="my-2 text-center">
                Don't have an account?
                <Link to="/register">
                  <span className="border-b border-b-black "> CREATE ONE</span>
                </Link>
              </p>

              <button
                onClick={() => handleGoogleSignIn()}
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              {/* Email */}
              {/* <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Email icon"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="black"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                Login with Email
              </button> */}
              {/* Google */}

              {/* <button className="btn bg-black text-white border-black">
                <svg
                  aria-label="GitHub logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
                Login with GitHub
              </button> */}
            </fieldset>
          </form>
          {/* <button onClick={()=>handleGoogleSignIn()} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default User;
