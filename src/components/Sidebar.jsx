import React from "react"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar border-end bg-white">
      <NavLink to="/profil">Profil</NavLink>
    </div>
  )
}
