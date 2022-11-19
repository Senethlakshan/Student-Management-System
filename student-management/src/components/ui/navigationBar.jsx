import React from 'react'

export default function NavigationBar() {
  
  
    return (
        <div className="header-bar">
        <nav className="p-3 border-gray-200  bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
               Student Manageement System
              </span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
  