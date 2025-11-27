import React from "react";
import { useState } from "react";
import { FaServer } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full bg-white fixed z-50 shadow">
      <div className="flex items-center justify-between px-6 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-6">

        {/* Logo + Desktop Menu */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <FaServer className="text-primary text-2xl" />
            <span className="text-2xl font-bold text-dark">NovaHost</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
            <Link className={location.pathname === "/" ? "text-primary" : ""} to={"/"}>
              Home
            </Link>
            <Link className={location.pathname === "/hosting" ? "text-primary" : ""} to={"/hosting"}>
              Hosting
            </Link>
            <Link className={location.pathname === "/domain" ? "text-primary" : ""} to={"/domain"}>
              Domain
            </Link>
            <Link className={location.pathname === "/about" ? "text-primary" : ""} to={"/about"}>
              About
            </Link>
            <Link className={location.pathname === "/contact" ? "text-primary" : ""} to={"/contact"}>
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-dark font-semibold rounded cursor-pointer" to={"/auth"}>
            Login
          </Link>
          <Link className="md:px-3 lg:px-6 py-2.5 bg-primary text-white font-semibold rounded cursor-pointer" to={"/auth"}>
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          {showMenu ? (
            <FaXmark
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <FaBars
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center justify-center space-y-6 font-semibold text-white fixed w-64 h-screen bg-primary top-0 right-0 z-40 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link onClick={() => setShowMenu(false)} to={"/"}>Home</Link>
        <Link onClick={() => setShowMenu(false)} to={"/hosting"}>Hosting</Link>
        <Link onClick={() => setShowMenu(false)} to={"/domain"}>Domain</Link>
        <Link onClick={() => setShowMenu(false)} to={"/about"}>About</Link>
        <Link onClick={() => setShowMenu(false)} to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
