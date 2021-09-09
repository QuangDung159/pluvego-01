import React from "react"
import CustomSidebar from "../components/CustomSidebar"
import Header from "../components/Header"
import ProtectedRoute from "../components/ProtectedRoute"
import { SIDEBAR_MENU_USER } from "../Utils/Constants"
import MesAlertes from "../views/User/MesAlertes"
import MesAssets from "../views/User/MesAssets"
import MesContacts from "../views/User/MesContacts"
import Profil from "../views/User/Profil"

export default function UserLayout() {
  return (
    <>
      <Header userType="User"></Header>
      <div className="relative min-h-screen md:flex">
        <CustomSidebar menuArray={SIDEBAR_MENU_USER}></CustomSidebar>
        <div className="flex-1 bg-white p-5 h-screen">
          <ProtectedRoute exact path="/user/profil" component={Profil} />
          <ProtectedRoute
            exact
            path="/user/mes-alertes"
            component={MesAlertes}
          />
          <ProtectedRoute exact path="/user/mes-assets" component={MesAssets} />
          <ProtectedRoute
            exact
            path="/user/mes-contacts"
            component={MesContacts}
          />
        </div>
      </div>
    </>
  )
}
