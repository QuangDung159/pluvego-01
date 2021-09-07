import React from "react"
import { NavLink } from "react-router-dom"
import LogoSgv from "../components/LogoSgv"

export default function Header() {
  // redux

  // variable

  // function
  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  // render
  return (
    <div className="hidden flex-1 flex flex-col md:block">
      <nav className="px-4 flex justify-between bg-gray-100 h-16">
        {/* top bar left */}
        <ul className="flex items-center">
          {/* add button */}
          <li className="h-auto w-56">
            {/* <img
              className="h-full w-full mx-auto"
              src={process.env.PUBLIC_URL + "/assets/dist/images/logo.png"}
              alt="svelte logo"
            /> */}
            <LogoSgv></LogoSgv>
          </li>
        </ul>
        {/* to bar right  */}
        <ul className="flex items-center text-gray-700">
          <li className="pr-6">John Doe</li>
          <li className="pr-6">
            <NavLink exact to="/" onClick={() => handleLogout()}>
              Se déconnecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
