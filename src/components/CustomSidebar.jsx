import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function CustomSidebar({
  menuArray,
  navLink = "block py-2.5 px-4 transition duration-200 hover:bg-white header-nav-text text-gray-100",
  mobileMenuBarContainer = "header-nav flex justify-between text-gray-100 md:hidden",
  menuButton = "mobile-menu-button p-4 focus:outline-none focus:bg-gray-700",
  mobileLogoContainer = "flex flex-wrap content-center pr-4 h-auto w-24",
  logoUrl = "/assets/dist/images/logo-user.png",
  sideBarContainer = "sidebar header-nav w-64 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-10"
}) {
  // function
  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  // render
  const renderMenu = () => {
    return menuArray.map(menuItem => (
      <NavLink className={navLink} key={menuItem.path} to={menuItem.path}>
        {menuItem.title}
      </NavLink>
    ))
  }

  const [showMenu, setShowMenu] = useState(false)

  const renderBtnShowMenu = () => {
    return (
      <button className={menuButton} onClick={() => setShowMenu(!showMenu)}>
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
      <div className={mobileLogoContainer}>
        <img src={`${process.env.PUBLIC_URL}${logoUrl}`} alt="logo" />
      </div>
    )
  }

  return (
    <>
      {/* mobile menu bar */}
      <div className={mobileMenuBarContainer}>
        {renderBtnShowMenu()}
        {renderLogo()}
      </div>
      {/* sidebar */}
      <div
        className={`${sideBarContainer} ${!showMenu && "-translate-x-full"}`}
      >
        <div className="px-4 flex justify-between md:hidden">
          {renderLogo()}
          {renderBtnShowMenu()}
        </div>
        {/* nav */}
        <nav>
          {renderMenu()}
          <NavLink
            className={`${navLink} md:hidden`}
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
