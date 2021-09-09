import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
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
import Button from "../../components/BaseComponents/Button"
import Input from "../../components/BaseComponents/Input"

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

  const [formData, setFormData] = useState({
    email: "admin@admin.com",
    password: "0000"
  })

  // function
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!!token) {
      dispatch(setGlobalUserAuthorized(true))
      history.push("/admin/profil")
    }
  }, [])

  const onLoginSubmit = async () => {
    const { email, password } = formData

    const body = {
      username: email.replace("@admin.com", ""),
      password
    }

    dispatch(setGlobalShowLoader(true))
    const res = await loginAsync(body)

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token)
      history.push("/admin/profil")

      dispatch(setGlobalUserAuthorized(true))
      dispatch(setGlobalShowToast(true, res.message, "success"))
    }
    dispatch(setGlobalShowLoader(false))
  }

  const handleInputChange = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    setFormData({ ...formData, [name]: value })
  }

  //render
  return (
    <div className="center-wrapper-fullscreen">
      <form
        className="bg-white text-center rounded px-8 pt-6 p-0 pb-8 mb-4 border lg:w-1/4"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <Input
          label="Adresse email"
          register={register}
          inputName="email"
          validateMessage={errors?.email?.message}
          onChange={e => handleInputChange(e)}
          value={formData.email}
        ></Input>
        <Input
          label="Mot de passe"
          register={register}
          inputName="password"
          type="password"
          validateMessage={errors?.password?.message}
          onChange={e => handleInputChange(e)}
          value={formData.password}
        ></Input>
        <Button buttonClass="btn-primary" label="Se connecter"></Button>
      </form>
    </div>
  )
}
