import React from "react"
import CustomSidebar from "../components/CustomSidebar"
import Header from "../components/Header"
import ProtectedRoute from "../components/ProtectedRoute"
import MesAlertes from "../views/MesAlertes"
import MesAssets from "../views/MesAssets"
import MesContacts from "../views/MesContacts"
import Profil from "../views/Profil"

export default function AdminLayout() {
  return (
    <>
      <Header></Header>
      <div className="relative min-h-screen md:flex">
        <CustomSidebar></CustomSidebar>
        <div className="flex-1 bg-white p-5 h-screen">
          <ProtectedRoute exact path="/admin/profil" component={Profil} />
          <ProtectedRoute
            exact
            path="/admin/mes-alertes"
            component={MesAlertes}
          />
          <ProtectedRoute
            exact
            path="/admin/mes-assets"
            component={MesAssets}
          />
          <ProtectedRoute
            exact
            path="/admin/mes-contacts"
            component={MesContacts}
          />
        </div>
      </div>
    </>
  )
}
