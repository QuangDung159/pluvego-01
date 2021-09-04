import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setGlobalUserAuthorized } from "../redux/Actions"

export default function Header() {
  // redux
  const dispatch = useDispatch()

  // render
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-white">
      <div className="container-fluid">
        <img
          src={process.env.PUBLIC_URL + "/assets/dist/images/logo.png"}
          alt="logo"
          className="img-fluid nav-bar-logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/profil">
                Martin D.
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/auth"
                onClick={() => {
                  dispatch(setGlobalUserAuthorized(false))
                  localStorage.removeItem("isAuthenticated")
                  window.location.assign("/auth")
                }}
              >
                Se déconnecter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
