import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import * as yup from "yup"
import {
  setGlobalShowLoader,
  setGlobalShowToast,
  setGlobalUserAuthorized
} from "../../redux/Actions"
import { loginAsync } from "../../Utils/ApiManager"

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
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!!token) {
      dispatch(setGlobalUserAuthorized(true))
      history.push("/profil")
    }
  }, [])

  const onLoginSubmit = async data => {
    data.email = data.email.replace("@admin.com", "")
    dispatch(setGlobalShowLoader(true))
    const res = await loginAsync({
      username: data.email,
      password: data.password
    })

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token)
      history.push("/profil")

      dispatch(setGlobalUserAuthorized(true))
      dispatch(setGlobalShowToast(true, res.message, "success"))
    }
    dispatch(setGlobalShowLoader(false))
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
                defaultValue="admin@admin.com"
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
                defaultValue="0000"
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
