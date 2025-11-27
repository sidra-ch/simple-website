import React, { useState } from "react";
import { FaServer } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xl mx-auto p-12 shadow">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 mb-12 mx-auto cursor-pointer"
        >
          <FaServer className="text-primary text-2xl" />
          <span className="text-3xl text-dark font-bold">Elithosting</span>
        </div>
        <h1 className="text-3xl text-dark font-bold text-center">
          {isLogin ? "SignIn" : "Sign up"}
        </h1>
              {/* full name field */}

              {!isLogin &&
                <div className="mb-4">
          <label className="block mb-2 text-dark/80">Full Name</label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:text-dark/50"
            placeholder="Enter your name"
            type="name"/>
        </div>
              }

        {/* Email failed */}
        <div className="mb-4">
          <label className="block mb-2 text-dark/80">Email Adress</label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:text-dark/50"
            placeholder="Email"
            type="email"
          />
        </div>
        {/* password field */}
        <div className="mb-4">
          <label className="block mb-2 text-dark/80">Password</label>
          <input
            className="w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:text-dark/50"
            placeholder="Enter Password"
            type="password"
          />
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-2 text-dark/80"> Confirm Password</label>
            <input
              className="w-full px-6 py-2 border border-primary rounded outline-none placeholder:text-sm placeholder:text-dark/50"
              placeholder="Enter confirm Password"
              type="password"
            />
          </div>
        )}

        {/* forget password */}
        {isLogin && 
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input className="w-4 h-4 rounded" type="checkbox" />
              <span>Remember Me</span>
            </div>
            <a href="#" className="text-primary hover:underline font-semibold">
              Forget Password
            </a>
          </div>
        }
        {/* Login button */}
        <button className="w-full bg-primary text-white font-semibold py-2.5 px-4 rounded cursor-pointer">
          Login
        </button>
        <p className="text-dark font-semibold text-center mt-2">
          {isLogin ? "Have no account yet?" : "You already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold hover:underline cursor-pointer ml-2 "
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
