import React from "react"
import { Route } from "react-router"
import Auth from "../views/Guest/Auth"
import Base from "../views/Guest/Base"

export default function GuestLayout() {
  return (
    <>
      <Route exact path="/" component={Auth} />
      <Route exact path="/guest/base" component={Base} />
    </>
  )
}
