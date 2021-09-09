import React from "react"

export default function InlineInput({ ...props }) {
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
    <div
      className={`inline-input-container ${containerClass}`}
      style={containerStyle}
    >
      {label && (
        <div className="md:w-2/5">
          <label
            className={`input-label ${labelTextClass}`}
            style={labelTextStyle}
          >
            {label}
          </label>
        </div>
      )}

      <div className={`${label ? "md:w-3/5" : "md:w-full"}`}>
        {register ? (
          <>
            <input
              type={type}
              className={`inline-input ${inputClass} ${
                validateMessage && "input-border-red"
              }`}
              style={inputStyle}
              {...register(inputName.toString())}
              defaultValue={defaultValue}
              onChange={input => onChange(input)}
              value={value || ""}
            />
            {validateMessage && (
              <p className={`validate-error-text ${validateMessageClass}`}>
                {validateMessage}
              </p>
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
