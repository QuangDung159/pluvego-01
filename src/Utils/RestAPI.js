import axios from "axios"

// const baseUrl = "https://pick-me-api-v1.herokuapp.com/api/v1"
const baseUrl = "https://plugove.free.beeceptor.com"

export const get = async (url, headers = {}) => {
  const response = await axios.get(`${baseUrl}${url}`, headers)

  console.log(`GET ${url} :>> `, response.data)
  return response.data
}

export const getWithToken = async (url, headers = {}) => {
  const token = localStorage.getItem("token")
  const response = await axios.get(`${baseUrl}${url}`, {
    headers: {
      ...headers,
      Authorization: token
    }
  })

  console.log(`GET ${url} :>> `, response.data)
  return response.data
}

export const post = async (url, body = {}, headers = {}) => {
  const response = await axios.post(`${baseUrl}${url}`, body, headers)

  console.log(`POST ${url} :>> `, response.data)
  console.log("body :>> ", body)
  return response.data
}

export const postWithToken = async (url, body = {}, headers = {}) => {
  const token = localStorage.getItem("token")
  const response = await axios.post(`${baseUrl}${url}`, body, {
    ...headers,
    Authorization: token
  })

  console.log(`POST ${url} :>> `, response.data)
  console.log("body :>> ", body)
  return response.data
}
