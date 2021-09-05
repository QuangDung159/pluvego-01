import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setGlobalOpenSidenav, setGlobalUserAuthorized } from "../redux/Actions"

export default function Header({ isShowInfo }) {
  // redux
  const dispatch = useDispatch()
  const globalIsSmallScreen = useSelector(
    state => state.app.globalIsSmallScreen
  )

  // function

  // render
  const renderMenuButton = () => {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => dispatch(setGlobalOpenSidenav(true))}
      >
        <span className="navbar-toggler-icon" />
      </button>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-white">
      <div className="container-fluid">
        {isShowInfo && globalIsSmallScreen && renderMenuButton()}
        <img
          src={process.env.PUBLIC_URL + "/assets/dist/images/logo.png"}
          alt="logo"
          className="img-fluid nav-bar-logo"
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isShowInfo && (
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
                    localStorage.removeItem("token")
                    window.location.assign("/auth")
                  }}
                >
                  Se déconnecter
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}
