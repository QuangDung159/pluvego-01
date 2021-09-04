import { ENDPOINT } from "../constants/Endpoint"
import { get, getWithToken, post } from "./RestAPI"

export const loginAsync = async body => {
  return await post(ENDPOINT.AUTHENTICATION.LOGIN, body)
}

export const getListBankAsync = async () => {
  return await get(ENDPOINT.BANK.GET_LIST_BANK)
}

export const getListBookingAsync = async (page = 1, pageSize = 50) => {
  return await getWithToken(
    `${ENDPOINT.BOOKING.GET_ALL}pageIndex=${page}&pageSize=${pageSize}`
  )
}

export const getListCMSUserAsync = async (page = 1, pageSize = 50) => {
  return await getWithToken(
    `${ENDPOINT.USER.GET_LIST_CMS_USER}pageIndex=${page}&pageSize=${pageSize}`
  )
}
