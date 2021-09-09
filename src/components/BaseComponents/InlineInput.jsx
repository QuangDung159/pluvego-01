import React from "react"

export default function InlineInput({ ...props }) {
  const {
    containerClass = "inline-input-container",
    containerStyle = {},
    labelTextClass = "input-label",
    labelTextStyle = {},
    inputClass = "inline-input",
    inputStyle = {},
    label,
    register = null,
    validateMessage,
    inputName,
    validateMessageClass = "validate-error-text",
    defaultValue,
    onChange,
    value,
    type
  } = props

  return (
    <div className={containerClass} style={containerStyle}>
      {label && (
        <div className="md:w-2/5">
          <label className={labelTextClass} style={labelTextStyle}>
            {label}
          </label>
        </div>
      )}

      <div className={`${label ? "md:w-3/5" : "md:w-full"}`}>
        {register ? (
          <>
            <input
              type={type}
              className={`${inputClass} ${
                validateMessage && "input-border-red"
              }`}
              style={inputStyle}
              {...register(inputName.toString())}
              defaultValue={defaultValue}
              onChange={input => onChange(input)}
              value={value || ""}
            />
            {validateMessage && (
              <p className={validateMessageClass}>{validateMessage}</p>
            )}
          </>
        ) : (
          <>
            <input
              type={type}
              className={inputClass}
              style={inputStyle}
              defaultValue={defaultValue}
              onChange={input => onChange(input)}
              value={value}
            />
          </>
        )}
      </div>
    </div>
  )
}
