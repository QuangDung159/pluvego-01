import React from "react"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">
        Start Bootstrap
      </div>
      <div className="list-group list-group-flush">
        <Link
          to="/dashboard"
          className="list-group-item list-group-item-action list-group-item-light p-3"
        >
          Dashboard
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action list-group-item-light p-3"
        >
          Homepage
        </Link>
      </div>
    </div>
  )
}
