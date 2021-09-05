import { ENDPOINT } from "./Constants"
import { getWithToken, post, postWithToken } from "./RestAPI"

export const loginAsync = async body => {
  return await post(ENDPOINT.AUTHENTICATION.LOGIN, body)
}

export const loginFailAsync = async body => {
  return await post(ENDPOINT.AUTHENTICATION.LOGIN_FAIL, body)
}

export const getCurrentUserAsync = async () => {
  return await getWithToken(ENDPOINT.USER.GET_CURRENT_USER)
}

export const checkProtectedRouteAsync = async body => {
  return await postWithToken(
    ENDPOINT.AUTHENTICATION.CHECK_PROTECTED_ROUTE,
    body
  )
}

export const checkProtectedRouteFailAsync = async body => {
  return await postWithToken(
    ENDPOINT.AUTHENTICATION.CHECK_PROTECTED_ROUTE_FAIL,
    body
  )
}
