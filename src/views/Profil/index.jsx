import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useDispatch } from "react-redux"
import * as yup from "yup"
import { setGlobalShowToast } from "../../redux/Actions"
import { REGEX } from "../../Utils/Constants"

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
    phoneNum: ""
  })

  const [isPhoneValid, setIsPhoneValid] = useState(true)

  // function
  const onSubmit = () => {
    onValidatePhone()
    if (!isPhoneValid) return
    console.log("formData :>> ", formData)
    dispatch(setGlobalShowToast(true, "Login success", "success"))
  }

  const onValidatePhone = () => {
    const isMatch = formData.phoneNum.match(REGEX.phone)
    if (!isMatch) {
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
  return (
    <div className="container-fluid main-section">
      <h2 className="d-flex justify-content-center py-xxl-3">Profil</h2>
      <div className="row">
        <div className="col-sm-3 col-lg-3"></div>
        <div className="col-sm-6 col-lg-6">
          <form className="pb-xxl-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Nom
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input
                  type="text"
                  name="nom"
                  className={`form-control ${errors.nom && "is-invalid"}`}
                  {...register("nom")}
                  onChange={handleInputChange}
                  value={formData.nom}
                />
                {errors.nom && (
                  <p className="invalid-feedback">{errors.nom?.message}</p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Prénom
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input
                  name="prenom"
                  type="text"
                  className={`form-control ${errors.prenom && "is-invalid"}`}
                  {...register("prenom")}
                  onChange={handleInputChange}
                  value={formData.prenom}
                />
                {errors.prenom && (
                  <p className="invalid-feedback">{errors.prenom?.message}</p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Fonction
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input
                  name="fonction"
                  type="text"
                  className={`form-control ${errors.fonction && "is-invalid"}`}
                  {...register("fonction")}
                  onChange={handleInputChange}
                  value={formData.fonction}
                />
                {errors.fonction && (
                  <p className="invalid-feedback">{errors.fonction?.message}</p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Adressee Email
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input
                  name="email"
                  type="text"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  {...register("email")}
                  onChange={handleInputChange}
                  value={formData.email}
                />
                {errors.email && (
                  <p className="invalid-feedback">{errors.email?.message}</p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Numéro de téléphone
              </label>
              <div className="col-sm-8 col-xs-8 col-md-8 col-lg-8 mb-3">
                <PhoneInput
                  inputClass={`form-control w-100 ${
                    !isPhoneValid && "is-invalid"
                  }`}
                  country={"us"}
                  value={formData.phoneNum}
                  onChange={phone => {
                    setFormData({ ...formData, phoneNum: phone })
                    onValidatePhone()
                  }}
                />
                {!isPhoneValid && (
                  <p className="mt-3 p-invalid-feedback">
                    Le numéro de téléphone n'est pas valide
                  </p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-5">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-3 col-lg-3"></div>
      </div>
    </div>
  )
}
