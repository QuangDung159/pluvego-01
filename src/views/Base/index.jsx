import React from "react"
import PhoneInput from "react-phone-input-2"
import { useDispatch, useSelector } from "react-redux"
import { setGlobalShowToast } from "../../redux/Actions"

export default function Base() {
  // redux
  const dispatch = useDispatch()
  const globalShowToast = useSelector(state => state.app.globalShowToast)

  // variable

  // function
  const onClickBtn = (type, content) => {
    if (globalShowToast) {
      dispatch(setGlobalShowToast(false))
    } else {
      dispatch(setGlobalShowToast(true, content, type))
    }
  }

  // render
  return (
    <div className="container-fluid">
      <h2 className="d-flex justify-content-center py-xxl-3">Base</h2>
      <h4 className="d-flex justify-content-center py-xxl-3">Form elements</h4>
      <div className="row">
        <div className="col-sm-3 col-lg-3"></div>
        <div className="col-sm-6 col-lg-6">
          <form
            className="pb-xxl-3"
            onSubmit={() => console.log("submit form")}
          >
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Nom
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input type="text" name="nom" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Numéro de téléphone
              </label>
              <div className="col-sm-8 col-xs-8 col-md-8 col-lg-8 mb-3 bg-light">
                <PhoneInput
                  inputClassName="form-control w-100"
                  inputStyle={{
                    width: "100%"
                  }}
                  country={"us"}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-form-label">
                Nom
              </label>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <input
                  type="text"
                  name="nom"
                  className="form-control is-invalid"
                />
                <p className="invalid-feedback">Error validation</p>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-5">
                <button type="submit" className="btn btn-shadow">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <h4 className="d-flex justify-content-center py-xxl-3">Button</h4>
        <div>
          <button
            onClick={() => onClickBtn("primary", "Toast primary")}
            type="button"
            className="btn btn-primary mb-3 w-25"
          >
            Toast Primary
          </button>
          <button
            onClick={() => onClickBtn("secondary", "Toast secondary")}
            type="button"
            className="btn btn-secondary mb-3 w-25"
          >
            Toast Secondary
          </button>
          <button
            onClick={() => onClickBtn("success", "Toast success")}
            type="button"
            className="btn btn-success mb-3 w-25"
          >
            Toast Success
          </button>
          <button
            onClick={() => onClickBtn("danger", "Toast danger")}
            type="button"
            className="btn btn-danger mb-3 w-25"
          >
            Toast Danger
          </button>
          <button
            onClick={() => onClickBtn("warning", "Toast warning")}
            type="button"
            className="btn btn-warning mb-3 w-25"
          >
            Toast Warning
          </button>
          <button
            onClick={() => onClickBtn("info", "Toast info")}
            type="button"
            className="btn btn-info mb-3 w-25"
          >
            Toast Info
          </button>
          <button
            onClick={() => onClickBtn("light", "Toast light")}
            type="button"
            className="btn btn-light mb-3 w-25"
          >
            Toast Light
          </button>
          <button
            onClick={() => onClickBtn("dark", "Toast Dark")}
            type="button"
            className="btn btn-dark mb-3 w-25"
          >
            Toast Dark
          </button>
        </div>

        <h4 className="d-flex justify-content-center py-xxl-3">
          Button Shadow
        </h4>
        <div>
          <button
            onClick={() => onClickBtn("primary", "Toast primary")}
            type="button"
            className="btn btn-primary mb-3 w-25 btn-shadow"
          >
            Toast Primary
          </button>
          <button
            onClick={() => onClickBtn("secondary", "Toast secondary")}
            type="button"
            className="btn btn-secondary mb-3 w-25 btn-shadow"
          >
            Toast Secondary
          </button>
          <button
            onClick={() => onClickBtn("success", "Toast success")}
            type="button"
            className="btn btn-success mb-3 w-25 btn-shadow"
          >
            Toast Success
          </button>
          <button
            onClick={() => onClickBtn("danger", "Toast danger")}
            type="button"
            className="btn btn-danger mb-3 w-25 btn-shadow"
          >
            Toast Danger
          </button>
          <button
            onClick={() => onClickBtn("warning", "Toast warning")}
            type="button"
            className="btn btn-warning mb-3 w-25 btn-shadow"
          >
            Toast Warning
          </button>
          <button
            onClick={() => onClickBtn("info", "Toast info")}
            type="button"
            className="btn btn-info mb-3 w-25 btn-shadow"
          >
            Toast Info
          </button>
          <button
            onClick={() => onClickBtn("light", "Toast light")}
            type="button"
            className="btn btn-light mb-3 w-25 btn-shadow"
          >
            Toast Light
          </button>
          <button
            onClick={() => onClickBtn("dark", "Toast Dark")}
            type="button"
            className="btn btn-dark mb-3 w-25 btn-shadow"
          >
            Toast Dark
          </button>
        </div>

        <h4 className="d-flex justify-content-center py-xxl-3">Badge Button</h4>
        <div>
          <div className="mb-3">
            <span className="badge badge-pill badge-primary">Primary</span>
            <span className="badge badge-pill badge-secondary">Secondary</span>
            <span className="badge badge-pill badge-success">Success</span>
            <span className="badge badge-pill badge-danger">Danger</span>
            <span className="badge badge-pill badge-warning">Warning</span>
            <span className="badge badge-pill badge-info">Info</span>
            <span className="badge badge-pill badge-light">Light</span>
            <span className="badge badge-pill badge-dark">Dark</span>
          </div>
        </div>
        <h4 className="d-flex justify-content-center py-xxl-3">
          Badge Button Shadow
        </h4>
        <div>
          <div className="mb-3">
            <span className="badge badge-pill badge-primary btn-shadow">
              Primary
            </span>
            <span className="badge badge-pill badge-secondary btn-shadow">
              Secondary
            </span>
            <span className="badge badge-pill badge-success btn-shadow">
              Success
            </span>
            <span className="badge badge-pill badge-danger btn-shadow">
              Danger
            </span>
            <span className="badge badge-pill badge-warning btn-shadow">
              Warning
            </span>
            <span className="badge badge-pill badge-info btn-shadow">Info</span>
            <span className="badge badge-pill badge-light btn-shadow">
              Light
            </span>
            <span className="badge badge-pill badge-dark btn-shadow">Dark</span>
          </div>
        </div>

        <h4 className="d-flex justify-content-center py-xxl-3">Color</h4>
        <span
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#0a6342",
            textAlign: "center",
            marginLeft: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              justifyContent: "center",
              marginTop: 70
            }}
          >
            Menu active #0a6342
          </p>
        </span>

        <span
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#555",
            textAlign: "center",
            marginLeft: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              justifyContent: "center",
              marginTop: 70
            }}
          >
            Menu hover #555
          </p>
        </span>

        <span
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#dc3545",
            textAlign: "center",
            marginLeft: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              justifyContent: "center",
              marginTop: 70
            }}
          >
            Validation error #dc3545
          </p>
        </span>
        <span
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#f3f3f3",
            textAlign: "center",
            marginLeft: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              justifyContent: "center",
              marginTop: 70
            }}
          >
            Slide menu background #f3f3f3
          </p>
        </span>
      </div>
      <div className="col-sm-3 col-lg-3"></div>
    </div>
  )
}
