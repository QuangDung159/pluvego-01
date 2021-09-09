import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import "react-phone-input-2/lib/style.css"
import { useDispatch } from "react-redux"
import * as yup from "yup"
import Button from "../../../components/BaseComponents/Button"
import InlineInput from "../../../components/BaseComponents/InlineInput"
import InlinePhoneInput from "../../../components/BaseComponents/InlinePhoneInput"
import { setGlobalShowToast } from "../../../redux/Actions"

// create validation schema
const schema = yup.object().shape({
  nom: yup
    .string()
    .required("Veuillez entrer votre nom")
    .max(100, "Plus de 100 caractères"),
  prenom: yup
    .string()
    .required("Veuillez entrer votre prenom")
    .max(100, "Plus de 100 caractères"),
  fonction: yup
    .string()
    .required("Veuillez entrer votre fonction")
    .max(100, "Plus de 100 caractères"),
  email: yup
    .string()
    .required("Veuillez entrer votre email")
    .max(200, "Plus de 200 caractères")
    .email("Email non valide")
})

export default function Profil() {
  // redux
  const dispatch = useDispatch()

  // variable
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const [formData, setFormData] = useState({
    nom: "nom",
    prenom: "prenom",
    fonction: "fonction",
    email: "admin@mail.com",
    phoneNum: "3322312312"
  })

  const [isPhoneValid, setIsPhoneValid] = useState(true)

  // function
  const onSubmit = () => {
    onValidatePhone(formData.phoneNum)
    if (!isPhoneValid) return
    console.log("formData :>> ", formData)
    dispatch(setGlobalShowToast(true, "Login success", "success"))
  }

  const onValidatePhone = phone => {
    if (phone.length === 0) {
      setIsPhoneValid(false)
    } else {
      setIsPhoneValid(true)
    }
  }

  const handleInputChange = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    setFormData({ ...formData, [name]: value })
  }

  // render

  const renderForm = () => {
    return (
      <form
        className="lg:w-3/4 md:w-full xl:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InlineInput
          type="text"
          register={register}
          inputName="nom"
          label="Nom"
          validateMessage={errors?.nom?.message}
          onChange={e => {
            handleInputChange(e)
          }}
          value={formData.nom}
        ></InlineInput>
        <InlineInput
          type="text"
          register={register}
          inputName="prenom"
          label="Prénom"
          validateMessage={errors?.prenom?.message}
          onChange={e => {
            handleInputChange(e)
          }}
          value={formData.prenom}
        ></InlineInput>
        <InlineInput
          type="text"
          register={register}
          inputName="fonction"
          label="Fonction"
          validateMessage={errors?.fonction?.message}
          onChange={e => {
            handleInputChange(e)
          }}
          value={formData.fonction}
        ></InlineInput>
        <InlineInput
          type="text"
          register={register}
          inputName="email"
          label="Adresse email"
          validateMessage={errors?.email?.message}
          onChange={e => {
            handleInputChange(e)
          }}
          value={formData.email}
        ></InlineInput>
        <InlinePhoneInput
          country="fr"
          value={formData.phoneNum}
          onChange={phone => {
            setFormData({ ...formData, phoneNum: phone })
            onValidatePhone(phone)
          }}
          validateMessage={
            !isPhoneValid && "Le numéro de téléphone n'est pas valide"
          }
          label="Numéro de téléphone"
        ></InlinePhoneInput>

        <Button buttonClass="btn-primary" label="Submit"></Button>
      </form>
    )
  }

  return (
    <div className="md:flex md:items-center mb-6 flex-col">
      <p className="text-2xl pb-5">Profil (user)</p>
      {renderForm()}
    </div>
  )
}
