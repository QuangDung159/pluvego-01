import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import * as yup from "yup"
import { setGlobalUserAuthorized } from "../../redux/Actions"

// create validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "username tối đa 50 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .max(20, "mật khẩu tối đa 20 ký tự")
})

export default function Login() {
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
      history.push("/")
    }
  }

  //render
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      {/* main section */}
      <div className="border">
        <form
          style={{
            padding: "1rem 3rem"
          }}
          onSubmit={handleSubmit(onLoginSubmit)}
        >
          <div className="form-group mb-3">
            <label htmlFor="email" className="w-100 text-center">
              Email address:
            </label>
            <input
              type="email"
              className="form-control form-control-sm form-control-lg"
              placeholder="Enter email"
              id="email"
              {...register("email")}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="pwd" className="w-100 text-center">
              Password:
            </label>
            <input
              type="password"
              className="form-control form-control-sm form-control-lg"
              placeholder="Enter password"
              id="pwd"
              {...register("password")}
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
