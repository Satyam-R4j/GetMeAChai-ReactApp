"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-4  items-center h-16 ">
      <Link href={"/"}>
      <div className="logo flex justify-center items-center font-bold textLg">
        
          <img className="logoInvert" src="/tea.gif" width={50} alt="" />
          <span className="text-xl">GetMeAChai!</span>
      </div>
        </Link>
      <div className="relative">
        {session && (
          <>
            <button
              onClick={() => {
                setShowdropdown(!showdropdown);
              }}
              onBlur={()=>{
                setTimeout(() => {
                  setShowdropdown(false)
                }, 100);
              }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white rounded-lg mx-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
              type="button"
            >
              hey! {session.user.email.split("@")[0]}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 rounded-md left-[60px] ${
                showdropdown ? "" : "hidden"
              } absolute bg-white divide-y divide-gray-100 roundedLg shadow w-32 dark:bg-gray-700`}
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => {
                      signOut();
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {session && (
          <button
            onClick={() => {
              signOut();
            }}
            type="button"
            className="text-white text-[17px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:focus:ring-blue-800 font-medium roundedLg text-sm px-2  py-2.5 text-center my-2 me-2 mb-2"
          >
            Log out
          </button>
        )}

        {!session && (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white text-[17px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2  py-2.5 text-center my-2 me-2 mb-2"
            >
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
