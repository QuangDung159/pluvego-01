import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useDispatch } from "react-redux"
import * as yup from "yup"
import { setGlobalShowToast } from "../../redux/Actions"

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
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    email: "",
    phoneNum: "123123123"
  })

  const [isPhoneValid, setIsPhoneValid] = useState(false)

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
      <form className="md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/5">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Nom
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="name"
              {...register("nom")}
              defaultValue="nom"
            />
            {errors?.nom && (
              <p className="text-red-500 text-xs italic">
                {errors.nom.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/5">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="preName"
            >
              Prénom
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="preName"
              {...register("prenom")}
              defaultValue="prénom"
            />
            {errors?.prenom && (
              <p className="text-red-500 text-xs italic">
                {errors.prenom.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/5">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="function"
            >
              Fonction
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="function"
              {...register("fonction")}
              defaultValue="Fonction"
            />
            {errors?.fonction && (
              <p className="text-red-500 text-xs italic">
                {errors.fonction.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/5">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Adresse email
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="email"
              {...register("email")}
              defaultValue="admin@damin.com"
            />
            {errors?.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/5">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Numéro de téléphone
            </label>
          </div>
          <div className="md:w-3/5">
            <PhoneInput
              inputClass={`appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              country={"fr"}
              value={formData.phoneNum}
              onChange={phone => {
                setFormData({ ...formData, phoneNum: phone })
                onValidatePhone(phone)
              }}
              inputStyle={{
                width: "100%"
              }}
            />
            {!isPhoneValid && (
              <p className="text-red-500 text-xs italic">
                Le numéro de téléphone n'est pas valide
              </p>
            )}
          </div>
        </div>

        <div className="justify-between">
          <button
            className="shadow-2xl text-gray-700 bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Se connecter
          </button>
        </div>
      </form>
    )
  }

  return (
    <div
      class="md:flex md:items-center mb-6"
      style={{
        flexDirection: "column"
      }}
    >
      <p className="text-2xl pb-5">Profil</p>
      {renderForm()}
    </div>
  )
}
