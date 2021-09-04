import {
  SET_GLOBAL_CURRENT_USER,
  SET_GLOBAL_USER_AUTHORIZED
} from "../ActionTypes"

const initState = {
  globalCurrentUser: null,
  globalUserAuthorized: false
}

const userReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GLOBAL_CURRENT_USER: {
      return { ...state, globalCurrentUser: payload.globalCurrentUser }
    }
    case SET_GLOBAL_USER_AUTHORIZED: {
      return {
        ...state,
        globalUserAuthorized: payload.globalUserAuthorized
      }
    }
    default: {
      return state
    }
  }
}

export default userReducer
