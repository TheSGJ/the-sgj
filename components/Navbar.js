import React, { useState } from 'react'
import Link from 'next/link'
export const Navbar = () => {

  return (
    <>
    <header className="fixed-tp-nav">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <span className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <span className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><a href="/"><img src="/logo.png" className="mr-3 h-7 sm:h-9" alt="TheSGJ" /></a></span>
          </span>
          </span>
        </span>
        <div className="flex md:order-2">
            
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          <Link href="/contact">
           Contact
          </Link>
          </button>


        </div>

      </div>
    </nav>
    </header>
    <br /> <br />
    </>
  )
}
