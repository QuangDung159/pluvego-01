import {
  RESET_GLOBAL_STORE_SIGN_OUT,
  SET_GLOBAL_CURRENT_USER,
  SET_GLOBAL_SHOW_LOADER,
  SET_GLOBAL_SHOW_TOAST,
  SET_GLOBAL_USER_AUTHORIZED
} from "./ActionTypes"

export const setGlobalCurrentUser = globalCurrentUser => ({
  type: SET_GLOBAL_CURRENT_USER,
  payload: {
    globalCurrentUser
  }
})

export const resetStoreSignOut = () => ({
  type: RESET_GLOBAL_STORE_SIGN_OUT
})

export const setGlobalShowToast = (
  globalShowToast,
  content,
  type = "error"
) => ({
  type: SET_GLOBAL_SHOW_TOAST,
  payload: {
    globalShowToast,
    toastProps: { type, content }
  }
})

export const setGlobalShowLoader = globalShowLoader => ({
  type: SET_GLOBAL_SHOW_LOADER,
  payload: {
    globalShowLoader
  }
})

export const setGlobalUserAuthorized = globalUserAuthorized => ({
  type: SET_GLOBAL_USER_AUTHORIZED,
  payload: {
    globalUserAuthorized
  }
})
