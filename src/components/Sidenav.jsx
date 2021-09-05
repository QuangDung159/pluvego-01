import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { setGlobalOpenSidenav, setGlobalUserAuthorized } from "../redux/Actions"
import { SIDEBAR_MENU } from "../Utils/Constants"

export default function Sidenav() {
  // redux
  const dispatch = useDispatch()
  const globalOpenSidenav = useSelector(state => state.app.globalOpenSidenav)

  // variable
  const [sidebarWidth, setSidebarWidth] = useState(0)

  // function
  useEffect(() => {
    if (globalOpenSidenav) {
      setSidebarWidth(250)
    } else {
      setSidebarWidth(0)
    }
  }, [globalOpenSidenav])

  // render
  const renderMenu = () => {
    return SIDEBAR_MENU.map(menuItem => (
      <NavLink
        key={menuItem.path}
        exact
        to={menuItem.path}
        onClick={() => dispatch(setGlobalOpenSidenav(false))}
      >
        {menuItem.title}
      </NavLink>
    ))
  }

  return (
    <>
      <div
        id="mySidenav"
        style={{
          width: sidebarWidth
        }}
        className="sidenav"
      >
        <Link
          to="#"
          className="closebtn"
          onClick={() => dispatch(setGlobalOpenSidenav(false))}
        >
          ×
        </Link>
        {renderMenu()}
        <Link
          to="/auth"
          onClick={() => {
            dispatch(setGlobalUserAuthorized(false))
            localStorage.removeItem("token")
            window.location.assign("/auth")
          }}
        >
          Se déconnecter
        </Link>
      </div>
    </>
  )
}
