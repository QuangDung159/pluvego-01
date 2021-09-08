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
    label
  } = props

  return (
    <div
      className={`inline-input-container ${containerClass}`}
      style={containerStyle}
    >
      {label && (
        <div className="md:w-2/5">
          <label
            className={`inline-input-label ${labelTextClass}`}
            style={labelTextStyle}
            htmlFor="phone"
          >
            {label}
          </label>
        </div>
      )}

      <div className={`${label && "md:w-3/5"}`}>
        <PhoneInput
          inputclassName={`phone-inline-input-container ${inputClass}`}
          country={"fr"}
          value={value}
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
