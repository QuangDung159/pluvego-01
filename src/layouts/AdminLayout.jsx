import React from "react"
import CustomSidebar from "../components/CustomSidebar"
import Header from "../components/Header"
import ProtectedRoute from "../components/ProtectedRoute"
import Toast from "../components/Toast"
import { SIDEBAR_MENU_ADMIN } from "../Utils/Constants"
import MesAlertes from "../views/Admin/MesAlertes"
import MesAssets from "../views/Admin/MesAssets"
import MesContacts from "../views/Admin/MesContacts"
import Profil from "../views/Admin/Profil"

export default function AdminLayout() {
  return (
    <>
      <Toast></Toast>
      <Header
        userType="Admin"
        navContainer="px-4 flex justify-between bg-gray-500 h-16"
      ></Header>
      <div className="relative min-h-screen md:flex">
        <CustomSidebar
          logoUrl="/assets/dist/images/logo-admin.png"
          mobileMenuBarContainer="bg-gray-500 flex justify-between text-gray-100 md:hidden"
          sideBarContainer="sidebar bg-gray-500 w-64 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-10"
          menuArray={SIDEBAR_MENU_ADMIN}
        ></CustomSidebar>
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
