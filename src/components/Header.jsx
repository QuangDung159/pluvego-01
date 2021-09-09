import React from "react"
import { NavLink } from "react-router-dom"
import LogoSgv from "../components/LogoSgv"

export default function Header({
  userType,
  headerContainer = "hidden flex-1 flex flex-col md:block",
  navContainer = "px-4 flex justify-between header-nav h-16",
  herderTexStyle = "flex items-center font-bold text-gray-100"
}) {
  // redux

  // variable

  // function
  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  // render
  return (
    <div className={headerContainer}>
      <nav className={navContainer}>
        {/* top bar left */}
        <ul className="flex items-center">
          {/* add button */}
          <li className="h-auto w-56">
            <LogoSgv></LogoSgv>
          </li>
        </ul>
        {/* to bar right  */}
        <ul className={herderTexStyle}>
          <li className="pr-6">{userType}</li>
          <li className="pr-6 header-nav-text">
            <NavLink exact to="/" onClick={() => handleLogout()}>
              Se déconnecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
