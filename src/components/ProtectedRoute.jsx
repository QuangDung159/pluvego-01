/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { Redirect, Route, useLocation } from "react-router-dom"
import { checkValidTokenAsync } from "../Utils/ApiManager"

function ProtectedRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token")
  const [isValidToken, setIsValidToken] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (rest?.path === location.pathname) {
      // trigger every access url
      if (token) {
        validationToken(token)
      } else {
        setIsValidToken(false)
      }
    }
  }, [rest?.path, location.pathname])

  const validationToken = async token => {
    // In case mockAPI exhausted
    setIsValidToken(true)
    return

    // call API check token
    const res = await checkValidTokenAsync(token)

    if (res && res.status === 200) {
      setIsValidToken(true)
    } else {
      localStorage.removeItem("token")
      setIsValidToken(false)
    }
  }

  if (isValidToken === null) {
    return <></>
  }

  return (
    <Route
      {...rest}
      render={props =>
        isValidToken ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default ProtectedRoute
