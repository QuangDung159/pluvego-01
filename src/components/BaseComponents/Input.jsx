import React from "react"

export default function Input({ ...props }) {
  const {
    containerClass = "mb-4",
    containerStyle = {},
    labelTextClass = "input-label",
    labelTextStyle = {},
    inputClass = "input",
    inputStyle = {},
    label,
    register = null,
    validateMessage,
    inputName,
    validateMessageClass = "validate-error-text",
    defaultValue,
    onChange,
    value,
    type,
    placeholder
  } = props

  return (
    <div className={containerClass} style={containerStyle}>
      <label
        className={labelTextClass}
        style={labelTextStyle}
        htmlFor={`${inputName}`}
      >
        {label}
      </label>
      <input
        className={`${validateMessage && "border-red-500"} ${inputClass}`}
        style={inputStyle}
        name={inputName}
        type={type}
        {...register(`${inputName}`)}
        defaultValue={defaultValue}
        onChange={input => onChange(input)}
        value={value || ""}
        placeholder={placeholder}
      />
      {validateMessage && (
        <p className={validateMessageClass}>{validateMessage}</p>
      )}
    </div>
  )
}
