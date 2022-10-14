import React, { useState } from 'react'
import Link from 'next/link'
export const Navbar = () => {
  const [ navClassMenu, setNavClassMenu ] = useState("hidden justify-between items-center w-full md:flex md:w-auto md:order-1")
  const [openMenuBar, setOpenMenuBar] = useState("w-6 h-6")
  const [closeMenuBar, setCloseMenuBar] = useState("hidden w-6 h-6")
  const showNavMenu = () => {
    
    if (navClassMenu === "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"){
        setNavClassMenu("justify-between items-center w-full md:flex md:w-auto md:order-1")
        setOpenMenuBar("hidden w-6 h-6")
        setCloseMenuBar("w-6 h-6")
    }else{
        setNavClassMenu("hidden justify-between items-center w-full md:flex md:w-auto md:order-1")
        setOpenMenuBar("w-6 h-6")
        setCloseMenuBar("hidden w-6 h-6")
    }
  };
  const clickNavClose = () => {
    setNavClassMenu("hidden justify-between items-center w-full md:flex md:w-auto md:order-1")
    setOpenMenuBar("w-6 h-6")
    setCloseMenuBar("hidden w-6 h-6")
  }
  return (
    <>
    <header className="fixed-tp-nav">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <span className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <span className="flex items-center" onClick={clickNavClose}>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TheSGJ Tech</span>
          </span>
          </span>
        </span>
        <div className="flex md:order-2">
            <Link href="/posts" onClick={clickNavClose}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Blog
          </button>
          </Link>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={showNavMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={openMenuBar}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={closeMenuBar}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={navClassMenu}
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <span
                className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                aria-current="page"
                onClick={clickNavClose}
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={clickNavClose}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </span>
            </li>
            <li>
              <span
                onClick={clickNavClose}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Posts
              </span>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </header>
    <br /> <br />
    </>
  )
}
