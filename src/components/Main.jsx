/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route } from "react-router"
import { setGlobalIsSmallScreen } from "../redux/Actions"
import Auth from "../views/Auth"
import Base from "../views/Base"
import MesAlertes from "../views/MesAlertes"
import MesAssets from "../views/MesAssets"
import MesContacts from "../views/MesContacts"
import Profil from "../views/Profil"
import CustomSidebar from "./CustomSidebar"
import Header from "./Header"
import ProtectedRoute from "./ProtectedRoute"
import Sidenav from "./Sidenav"
import Toast from "./Toast"

export default function Main() {
  // redux
  const dispatch = useDispatch()
  const globalUserAuthorized = useSelector(
    state => state.user.globalUserAuthorized
  )
  const globalIsSmallScreen = useSelector(
    state => state.app.globalIsSmallScreen
  )
  const globalShowLoader = useSelector(state => state.app.globalShowLoader)

  // variable
  const [isShow, setIsShow] = useState(false)

  // function
  useEffect(() => {
    // check auth status to show navbar
    const token = localStorage.getItem("token")
    setIsShow(!!token)
  }, [globalUserAuthorized])

  useEffect(() => {
    dispatch(setGlobalIsSmallScreen(window.innerWidth <= 768))

    // get window size when window was resize
    const onResizeWindow = window.addEventListener("resize", handleResize)
    return onResizeWindow
  }, [])

  // set screen type
  const handleResize = e => {
    dispatch(setGlobalIsSmallScreen(window.innerWidth <= 768))
  }

  // show menu base on auth status
  const handleShowMenu = () => {
    if (isShow) {
      if (globalIsSmallScreen) {
        return <Sidenav></Sidenav>
      } else {
        return <CustomSidebar></CustomSidebar>
      }
    }
  }

  // render
  return (
    <div className="d-flex" id="wrapper">
      {globalShowLoader && <div className="loader"></div>}
      <Toast></Toast>
      <div id="page-content-wrapper">
        <Route exact path="/auth" component={Auth}></Route>
        <Route exact path="/" component={Auth}></Route>
        {<Header isShowInfo={isShow}></Header>}
        <div className="padding-navbar">
          {handleShowMenu()}
          <div className={`${!globalIsSmallScreen && "content"}`}>
            <ProtectedRoute exact path="/profil" component={Profil} />
            <ProtectedRoute exact path="/mes-alertes" component={MesAlertes} />
            <ProtectedRoute exact path="/mes-assets" component={MesAssets} />
            <ProtectedRoute
              exact
              path="/mes-contacts"
              component={MesContacts}
            />
            <Route exact path="/base" component={Base} />
          </div>
        </div>
      </div>
    </div>
  )
}
