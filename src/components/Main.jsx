import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Route } from "react-router"
import Dashboard from "../views/Dashboard"
import Home from "../views/Home"
import Login from "../views/Login"
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
      {isShow && <Sidebar></Sidebar>}
      <div id="page-content-wrapper">
        {isShow && <Header></Header>}
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
        ></ProtectedRoute>
        <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
        <Route exact path="/login" component={Login}></Route>
      </div>
    </div>
  )
}
