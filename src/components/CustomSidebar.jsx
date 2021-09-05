import React from "react"
import { NavLink } from "react-router-dom"
import { SIDEBAR_MENU } from "../Utils/Constants"

export default function CustomSidebar() {
  // render
  const renderMenu = () => {
    return SIDEBAR_MENU.map(menuItem => (
      <NavLink key={menuItem.path} to={menuItem.path}>
        {menuItem.title}
      </NavLink>
    ))
  }

  return <div className="sidebar border-end bg-white">{renderMenu()}</div>
}
