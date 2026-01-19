import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const menuItem = (
  <>
    <li>
      <HashLink smooth to="/#Home" className=" hover:text-orange-500 ">
        Home
      </HashLink>
    </li>
    <li>
      <HashLink smooth to="/#skill" className=" hover:text-orange-500">
        Skill
      </HashLink>
    </li>
    <li>
      <HashLink smooth to="/#project" className=" hover:text-orange-500">
        Projects
      </HashLink>
    </li>
    <li>
      <Link to="/about" className=" hover:text-orange-500">
        About
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full transition-all ease-linear duration-500 font-bold px-2 md:px-20 ${scrolled ? "bg-base-300" : "bg-transparent"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn py-2 px-1 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-bold text-secondary p-0 "
        >
          Portfolio
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex justify-end">
          <ul className="menu menu-horizontal px-1 text-[18px]">{menuItem}</ul>
        </div>
        <HashLink
          smooth
          to="/#contact"
          className="btn ml-4 mr-2 sm:mr-0 btn-primary btn-sm"
        >
          Contact Me
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
