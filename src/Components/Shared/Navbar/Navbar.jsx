import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import search from "../../../assets/images/search-icon.png"
import cart from "../../../assets/images/cart-icon.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="px-[80px] bg-[#F2EBE0]">
      <div className="navbar">
        <div className="navbar-start">
          <Link><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="nav-link">Shop</Link>
            </li>
            <li>
              <Link className="nav-link">Prescription</Link>
            </li>
            <li>
              <Link className="nav-link">Book a Therapy</Link>
            </li>
            <li>
              <Link className="nav-link">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <img className="w-[24px] h-[24px]" src={search} alt="search-icon" />
          <img className="w-[24px] h-[24px]" src={cart} alt="cart-icon" />
          <Link className="nav-link">Sign In</Link>
          {/* TODO: FIX THIS LATER */}
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>     
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
