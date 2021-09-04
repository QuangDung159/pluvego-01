import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { REGEX } from "../../Utils/Constant"

// create validation schema
const schema = yup.object().shape({
  nom: yup.string().required("Veuillez entrer votre nom"),
  prenom: yup.string().required("Veuillez entrer votre prenom"),
  fonction: yup.string().required("Veuillez entrer votre fonction"),
  email: yup.string().required("Veuillez entrer votre email"),
  telephone: yup
    .string()
    .required("Veuillez entrer votre telephone")
    .matches(REGEX.phone, "Phone number is not valid")
})

export default function Profil() {
  // redux

  // variable
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  // function
  const onSubmit = data => {
    // console.log("data :>> ", data)
  }

  // render
  return (
    <div className="container-fluid">
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
                  className={`form-control ${errors.nom && "is-invalid"}`}
                  {...register("nom")}
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
                  type="text"
                  className={`form-control ${errors.prenom && "is-invalid"}`}
                  {...register("prenom")}
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
                  type="text"
                  className={`form-control ${errors.fonction && "is-invalid"}`}
                  {...register("fonction")}
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
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  {...register("email")}
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
              <div className="col-sm-2">
                <select id="inputState" className="form-control">
                  <option selected>+33</option>
                  <option>+84</option>
                  <option>+12</option>
                </select>
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className={`form-control ${errors.telephone && "is-invalid"}`}
                  {...register("telephone")}
                />
                {errors.telephone && (
                  <p className="invalid-feedback">
                    {errors.telephone?.message}
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
