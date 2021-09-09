import React from "react"

export default function Input({ ...props }) {
  const {
    containerClass,
    containerStyle = {},
    labelTextClass,
    labelTextStyle = {},
    inputClass,
    inputStyle = {},
    label,
    register = null,
    validateMessage,
    inputName,
    validateMessageClass,
    defaultValue,
    onChange,
    value,
    type
  } = props

  return (
    <div className={`mb-4 ${containerClass}`} style={containerStyle}>
      <label
        className={`input-label ${labelTextClass}`}
        style={labelTextStyle}
        htmlFor={`${inputName}`}
      >
        {label}
      </label>
      <input
        className={`${validateMessage && "border-red-500"} input ${inputClass}`}
        style={inputStyle}
        name={inputName}
        type={type}
        {...register(`${inputName}`)}
        defaultValue={defaultValue}
        onChange={input => onChange(input)}
        value={value || ""}
      />
      {validateMessage && (
        <p className={`validate-error-text ${validateMessageClass}`}>
          {validateMessage}
        </p>
      )}
    </div>
  )
}
