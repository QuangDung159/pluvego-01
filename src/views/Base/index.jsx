import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/BaseComponents/Input"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Button from "../../components/BaseComponents/Button"
import InlineInput from "../../components/BaseComponents/InlineInput"
import InlinePhoneInput from "../../components/BaseComponents/InlinePhoneInput"

// create validation schema
const schema = yup.object().shape({
  nom: yup
    .string()
    .required("Veuillez entrer votre nom")
    .max(100, "Plus de 100 caractères"),
  email: yup
    .string()
    .required("Veuillez entrer votre email")
    .max(200, "Plus de 200 caractères")
    .email("Email non valide")
})

export default function Base() {
  // redux

  // variable
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const [formData, setFormData] = useState({})

  const [isPhoneValid, setIsPhoneValid] = useState(true)

  // function
  const handleInputChange = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    setFormData({ ...formData, [name]: value })
  }

  const onValidatePhone = phone => {
    if (phone.length === 0) {
      setIsPhoneValid(false)
    } else {
      setIsPhoneValid(true)
    }
  }

  // render
  return (
    <div className="md:flex md:items-center flex-col">
      <p className="text-bold text-2xl">Base</p>
      <div className="mb-6 w-1/2 px-3">
        <p className="text-bold text-xl pb-6">Inline input</p>
        <InlineInput
          type="text"
          register={register}
          inputName="email"
          label="Email"
          validateMessage={errors?.email?.message}
          onChange={e => {
            handleInputChange(e)
          }}
          value={formData.email}
        ></InlineInput>
        <InlineInput
          type="text"
          register={register}
          inputName="prenom"
          label="Invalid field"
          validateMessage="Invalid field"
          onChange={e => {
            handleInputChange(e)
          }}
        ></InlineInput>
        <InlinePhoneInput
          country="fr"
          value={formData.phoneNum}
          onChange={phone => {
            setFormData({ ...formData, phoneNum: phone })
            onValidatePhone(phone)
          }}
          inputName="phoneNum"
          validateMessage={
            !isPhoneValid && "Le numéro de téléphone n'est pas valide"
          }
          label="Numéro de téléphone"
        ></InlinePhoneInput>
      </div>

      <div className="mb-6 w-1/2 px-3">
        <p className="text-bold text-xl pb-6">Input</p>
        <Input
          label="Name"
          register={register}
          inputName="name"
          validateMessage={errors?.name?.message}
          onChange={e => handleInputChange(e)}
          value={formData.name}
        ></Input>
        <Input
          label="Password"
          register={register}
          inputName="password"
          type="password"
          validateMessage={errors?.password?.message}
          onChange={e => handleInputChange(e)}
          value={formData.password}
        ></Input>
        <Input
          label="Invalid field"
          register={register}
          validateMessage="Invalid field"
          onChange={e => handleInputChange(e)}
          value={formData.email}
        ></Input>
      </div>

      <div className="mb-6 w-1/2 px-3 flex-row">
        <p className="text-bold text-xl pb-6">Button</p>
        <div className="flex">
          <Button buttonClass="btn-primary mr-3" label="Submit"></Button>
          <Button buttonClass="btn-default" label="Cancel"></Button>
        </div>
      </div>

      <div className="mb-6 w-1/2 px-3 flex-row">
        <p className="text-bold text-xl pb-6">Color</p>
        <div className="flex">
          <div
            className="bg-green-400 mr-3"
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <p
              style={{
                alignSelf: "center"
              }}
            >
              Primary - bg-green-400
            </p>
          </div>
          <div
            className="bg-gray-200"
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <p
              style={{
                alignSelf: "center"
              }}
            >
              Default - bg-gray-200
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
