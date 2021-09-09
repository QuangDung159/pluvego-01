import React from "react"
import PhoneInput from "react-phone-input-2"

export default function InlinePhoneInput({ ...props }) {
  const {
    containerClass,
    containerStyle,
    labelTextClass,
    labelTextStyle,
    value,
    onChange,
    inputStyle = {
      width: "100%"
    },
    inputClass,
    validateMessage,
    validateMessageClass,
    label,
    country = "fr"
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
            htmlFor="phone"
          >
            {label}
          </label>
        </div>
      )}

      <div className={`${label && "md:w-3/5"}`}>
        <PhoneInput
          inputClass={`phone-inline-input-container input-border-red ${inputClass} ${
            validateMessage && "input-border-red"
          }`}
          country={country}
          value={value || ""}
          onChange={phone => {
            onChange(phone)
          }}
          inputStyle={inputStyle}
        />
        {validateMessage && (
          <p className={`validate-error-text ${validateMessageClass}`}>
            {validateMessage}
          </p>
        )}
      </div>
    </div>
  )
}
