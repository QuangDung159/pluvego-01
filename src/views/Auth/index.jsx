import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import * as yup from "yup"
import { setGlobalUserAuthorized } from "../../redux/Actions"

// create validation schema
const schema = yup.object().shape({
  email: yup.string().required("Veuillez entrer votre email"),
  password: yup.string().required("Veuillez entrer un mot de passe")
})

export default function Auth() {
  // redux
  const dispatch = useDispatch()

  // variable
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const history = useHistory()

  // function
  const onLoginSubmit = data => {
    const { email, password } = data
    if (email === "quangdunglu159@gmail.com" && password === "1") {
      dispatch(setGlobalUserAuthorized(true))
      history.push("/profil")
    }
  }

  //render
  return (
    <div className="container-fluid">
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        {/* main section */}
        <div className="border mx-sm-3">
          <form className="auth-form" onSubmit={handleSubmit(onLoginSubmit)}>
            <div className="form-group">
              <label
                htmlFor="email"
                className="w-100 text-center mb-2 fw-bolder"
              >
                Adresse email
              </label>
              <input
                type="email"
                className={`form-control form-control-sm form-control-lg ${
                  errors.email && "is-invalid"
                }`}
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="invalid-feedback">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="w-100 text-center mb-2 fw-bolder">
                Mot de passe
              </label>
              <input
                type="password"
                className={`form-control form-control-sm form-control-lg ${
                  errors.password && "is-invalid"
                }`}
                id="pwd"
                {...register("password")}
              />
              {errors.password && (
                <p className="invalid-feedback">{errors.password?.message}</p>
              )}
            </div>
            <div className="w-100 d-flex justify-content-center">
              <button type="submit" className="btn shadow bg-white">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
