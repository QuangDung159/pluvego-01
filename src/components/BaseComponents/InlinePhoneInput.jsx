import React from "react"
import PhoneInput from "react-phone-input-2"

export default function InlinePhoneInput({ ...props }) {
  const {
    containerClass = "inline-input-container",
    containerStyle,
    labelTextClass = "input-label",
    labelTextStyle,
    value,
    onChange,
    inputStyle = {
      width: "100%"
    },
    inputClass = "phone-inline-input-container input-border-red",
    validateMessage,
    validateMessageClass = "validate-error-text",
    label,
    country = "fr"
  } = props

  return (
    <div className={containerClass} style={containerStyle}>
      {label && (
        <div className="md:w-2/5">
          <label
            className={labelTextClass}
            style={labelTextStyle}
            htmlFor="phone"
          >
            {label}
          </label>
        </div>
      )}

      <div className={`${label && "md:w-3/5"}`}>
        <PhoneInput
          inputClass={`${inputClass} ${validateMessage && "input-border-red"}`}
          country={country}
          value={value || ""}
          onChange={phone => {
            onChange(phone)
          }}
          inputStyle={inputStyle}
        />
        {validateMessage && (
          <p className={validateMessageClass}>{validateMessage}</p>
        )}
      </div>
    </div>
  )
}
