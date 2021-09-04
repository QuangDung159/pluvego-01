import { SET_GLOBAL_SHOW_LOADER, SET_GLOBAL_SHOW_TOAST } from "../ActionTypes"

const initState = {
  globalShowToast: false,
  globalToastProps: null,
  globalShowLoader: false
}

const appConfigReducer = (state = initState, action) => {
  const { payload, type } = action
  switch (type) {
    case SET_GLOBAL_SHOW_TOAST: {
      return {
        ...state,
        globalShowToast: payload.globalShowToast,
        globalToastProps: payload.globalToastProps
      }
    }
    case SET_GLOBAL_SHOW_LOADER: {
      return {
        ...state,
        globalShowLoader: payload.globalShowLoader
      }
    }
    default: {
      return state
    }
  }
}

export default appConfigReducer
