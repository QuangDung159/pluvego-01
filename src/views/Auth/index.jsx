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
  email: yup
    .string()
    .required("Veuillez entrer votre email")
    .email("Email invalide"),
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
      history.push("/admin/profil")
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
      history.push("/admin/profil")

      dispatch(setGlobalUserAuthorized(true))
      dispatch(setGlobalShowToast(true, res.message, "success"))
    }
    dispatch(setGlobalShowLoader(false))
  }

  //render
  return (
    <div className="center-wrapper-fullscreen">
      <form
        className="bg-white text-center rounded px-8 pt-6 p-0 pb-8 mb-4 border lg:w-1/4"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Adresse email
          </label>
          <input
            className={`${
              errors?.email && "border-red-500"
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="email"
            type="text"
            {...register("email")}
            defaultValue="admin@admin.com"
          />
          {errors?.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            className={`${
              errors?.password && "border-red-500"
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            nam="password"
            type="password"
            {...register("password")}
            defaultValue="0000"
          />
          {errors?.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
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
    </div>
  )
}
