import React, { useState } from "react";
import kLogo from "../assets/kLogo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (

    <nav>
      <div className="mxauto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between pr-2 ">
            <div className="flex flex-shrink-0 items-center">
              <a href="">
                <img className="h-8 w-auto" src={kLogo} alt="Koinx" />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <a
                href="/"
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium overflow-hidden"
                aria-current="page"
              >
                Home
              </a> */}
                <a
                  href="/"
                  className="text-black hover:underline hover:underline-offset-2
                 hover:text-orange rounded-md px-3 py-2 text-sm font-medium"
                >
                  Crypto Taxes
                </a>
                <a
                  href="/"
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orange rounded-md px-3 py-2 text-sm font-medium"
                >
                  Free Tools
                </a>
                <a
                  href="/"
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orange rounded-md px-3 py-2 text-sm font-medium"
                >
                  Resource Center
                </a>
                <a
                  href="/"
                  className="text-white bg-[#1b4aef] rounded-md px-3 py-2 text-sm font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="text-black block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="/"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Crypto Taxes
          </a>
          <a
            href="/"
            className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Resource Center
          </a>
          <a
            href="/"
            className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base bg-blue-700 font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
