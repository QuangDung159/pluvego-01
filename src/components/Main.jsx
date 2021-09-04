import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route } from "react-router"
import Auth from "../views/Auth"
import Profil from "../views/Profil"
import Header from "./Header"
import ProtectedRoute from "./ProtectedRoute"
import Sidebar from "./Sidebar"

export default function Main() {
  // redux
  const globalUserAuthorized = useSelector(
    state => state.user.globalUserAuthorized
  )

  // variable
  const [isShow, setIsShow] = useState(false)

  // function
  useEffect(() => {
    if (globalUserAuthorized) localStorage.setItem("isAuthenticated", true)
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    setIsShow(!!isAuthenticated)
  }, [globalUserAuthorized])

  // render
  return (
    <div className="d-flex" id="wrapper">
      <div id="page-content-wrapper">
        <Route exact path="/auth" component={Auth}></Route>
        {isShow && <Header></Header>}
        <div className="padding-navbar">
          {isShow && <Sidebar></Sidebar>}
          <div className="content">
            <ProtectedRoute
              exact
              path="/profil"
              component={Profil}
            ></ProtectedRoute>
            <ProtectedRoute exact path="/" component={Auth}></ProtectedRoute>
          </div>
        </div>
      </div>
    </div>
  )
}
