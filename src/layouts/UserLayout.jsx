import React from "react"
import { Route } from "react-router"
import Auth from "../views/Auth"
import Base from "../views/Base"

export default function UserLayout() {
  return (
    <>
      <Route exact path="/" component={Auth} />
      <Route exact path="/user/base" component={Base} />
    </>
  )
}
