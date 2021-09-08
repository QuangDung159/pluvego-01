import React from "react"

export default function Button({ ...props }) {
  const { label = "label", type, buttonClass } = props

  return (
    <div className="justify-between">
      <button className={`btn-primary ${buttonClass}`} type={type}>
        {label}
      </button>
    </div>
  )
}
