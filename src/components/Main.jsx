/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { Route } from "react-router-dom"
import AdminLayout from "../layouts/AdminLayout"
import UserLayout from "../layouts/UserLayout"

export default function Main() {
  // redux

  // variable

  // function

  // render
  return (
    <>
      <Route path="/" component={UserLayout}></Route>
      <Route path="/admin" component={AdminLayout}></Route>
    </>
  )
}
