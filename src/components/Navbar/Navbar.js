import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import SecondaryButton from "../Shared/SecondaryButton";
import PrimaryButton from "../Shared/PrimaryButton";

const menuItem = (
  <>
    <li>
      <HashLink
        smooth
        to="/#Home"
        className="transition-all duration-300 font-bold hover:text-orange-600 "
      >
        Home
      </HashLink>
    </li>
    <li>
      <HashLink
        smooth
        to="/#skill"
        className="transition-all duration-300 font-bold hover:text-orange-600"
      >
        Skill
      </HashLink>
    </li>
    <li>
      <HashLink
        smooth
        to="/#project"
        className="transition-all duration-300 font-bold hover:text-orange-600"
      >
        Projects
      </HashLink>
    </li>
    <li>
      <Link
        to="/#about"
        className="transition-all duration-300 font-bold hover:text-orange-600"
      >
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
      className={`navbar fixed top-0 z-50 w-full transition-all ease-linear duration-500 font-bold px-2 md:px-36 py-3 ${scrolled ? "bg-base-300" : "bg-transparent"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn py-2 px-1 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          className="btn btn-ghost normal-case text-3xl font-bold text-secondary px-2 "
        >
          Portfolio
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex justify-end">
          <ul className="flex gap-8 px-4 py-3 ">{menuItem}</ul>
        </div>
        <HashLink smooth to="/#contact" className="px-4">
          <SecondaryButton text={"Contact Me"} />
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
