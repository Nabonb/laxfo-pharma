import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import search from "../../../assets/images/search-icon.png";
import cart from "../../../assets/images/cart-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:px-[80px] px-4 bg-[#F2EBE0]">
      <div className="navbar">
        <div className="navbar-start">
          <Link>
            <img src={logo} alt="" />
          </Link>
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
          <Link className="nav-link hidden md:block">Sign In</Link>
          <div>
            <button className="block md:hidden p-4" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div
              className={`fixed top-0 right-0 h-full w-64 md:w-1/3 bg-[#DCD2BB] transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } z-50 shadow-lg`}
            >
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-8 text-center">
                <img src={logo} alt="" />
                <ul className="space-y-6">
                  <li>
                    <Link className="nav-link font-medium text-4xl">Shop</Link>
                  </li>
                  <li>
                    <Link className="nav-link font-medium text-4xl">Prescription</Link>
                  </li>
                  <li>
                    <Link className="nav-link font-medium text-4xl">Book a Therapy</Link>
                  </li>
                  <li>
                    <Link className="nav-link font-medium text-4xl">Blog</Link>
                  </li>
                  <li>
                    <Link className="nav-link font-medium text-4xl">Sign In</Link>
                  </li>
                </ul>
              </div>
            </div>

            {isOpen && (
              <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
