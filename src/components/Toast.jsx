/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGlobalShowToast } from "../redux/Actions"

export default function Toast() {
  // redux
  const dispatch = useDispatch()
  const globalShowToast = useSelector(state => state.app.globalShowToast)
  const globalToastProps = useSelector(state => state.app.globalToastProps)

  // function
  useEffect(() => {
    if (globalShowToast) {
      const timeout = setTimeout(() => {
        dispatch(setGlobalShowToast(false))
        clearTimeout(timeout)
      }, 3000)
    }
  }, [globalShowToast])

  // render
  return (
    <>
      {globalShowToast && (
        <div
          className={`alert alert-${globalToastProps?.type} alert-dismissible fade show custom-toast`}
          role="alert"
        >
          {globalToastProps?.content}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => dispatch(setGlobalShowToast(false))}
          />
        </div>
      )}
    </>
  )
}
