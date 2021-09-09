/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { Route } from "react-router-dom"
import AdminLayout from "../layouts/AdminLayout"
import GuestLayout from "../layouts/GuestLayout"
import UserLayout from "../layouts/UserLayout"

export default function Main() {
  // redux

  // variable

  // function

  // render
  return (
    <>
      <Route path="/" component={GuestLayout}></Route>
      <Route path="/admin" component={AdminLayout}></Route>
      <Route path="/user" component={UserLayout}></Route>
    </>
  )
}
