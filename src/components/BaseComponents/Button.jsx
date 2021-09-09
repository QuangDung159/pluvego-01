import React from "react"

export default function Button({ ...props }) {
  const { label = "label", type, buttonClass = "btn-primary" } = props

  return (
    <div className="justify-between">
      <button className={buttonClass} type={type}>
        {label}
      </button>
    </div>
  )
}
