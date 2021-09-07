import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { SIDEBAR_MENU } from "../Utils/Constants"

export default function CustomSidebar() {
  // function
  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  // render
  const renderMenu = () => {
    return SIDEBAR_MENU.map(menuItem => (
      <NavLink
        className="block py-2.5 px-4 transition duration-200 hover:bg-gray-200"
        key={menuItem.path}
        to={menuItem.path}
      >
        {menuItem.title}
      </NavLink>
    ))
  }

  const [showMenu, setShowMenu] = useState(false)

  const renderBtnShowMenu = () => {
    return (
      <button
        className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    )
  }

  const renderLogo = () => {
    return (
      <div className="flex flex-wrap content-center pr-4">
        <div className="h-auto w-24 bg-black">
          <img
            src={process.env.PUBLIC_URL + "/assets/dist/images/logo.png"}
            alt="logo"
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* mobile menu bar */}
      <div className="bg-gray-100 flex justify-between text-gray-700 md:hidden">
        {renderBtnShowMenu()}
        {renderLogo()}
      </div>
      {/* sidebar */}
      <div
        className={`sidebar bg-gray-100 text-gray-700 w-64 absolute inset-y-0 left-0 transform ${
          !showMenu && "-translate-x-full"
        }  md:relative md:translate-x-0 transition duration-200 ease-in-out z-10`}
      >
        <div className=" px-4 flex justify-between md:hidden">
          {renderLogo()}
          {renderBtnShowMenu()}
        </div>
        {/* nav */}
        <nav>
          {renderMenu()}
          <NavLink
            className="block py-2.5 px-4 transition duration-200 hover:bg-gray-200 md:hidden"
            exact
            to="/"
            onClick={() => handleLogout()}
          >
            Se déconnecter
          </NavLink>
        </nav>
      </div>
    </>
  )
}
