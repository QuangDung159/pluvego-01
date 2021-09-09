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
          className={`flex items-center border-l-4 py-2 px-3 shadow-md absolute top-0 right-0 m-2 z-10 max-w-sm ${
            globalToastProps?.type === "error"
              ? "bg-red-500 border-red-700"
              : "bg-green-500 border-green-700"
          }`}
        >
          <div className="text-white max-w-xs ">
            {globalToastProps?.content || "Toast content"}
          </div>
        </div>
      )}
    </>
  )
}
