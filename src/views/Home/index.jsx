import React from "react"
import { useDispatch } from "react-redux"
import { setGlobalUserAuthorized } from "../../redux/Actions"

export default function Home() {
  // redux
  const dispatch = useDispatch()

  // variable

  return (
    <div>
      <h1>Home</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(setGlobalUserAuthorized(false))
          localStorage.removeItem("isAuthenticated")
          window.location.assign("/login")
        }}
      >
        Logout
      </button>
    </div>
  )
}
