import {
  SET_GLOBAL_IS_SMALL_SCREEN,
  SET_GLOBAL_OPEN_SIDENAV,
  SET_GLOBAL_SHOW_LOADER,
  SET_GLOBAL_SHOW_TOAST
} from "../ActionTypes"

const initState = {
  globalShowToast: false,
  globalToastProps: null,
  globalShowLoader: false,
  globalOpenSidenav: false,
  globalIsSmallScreen: false
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
    case SET_GLOBAL_OPEN_SIDENAV: {
      return {
        ...state,
        globalOpenSidenav: payload.globalOpenSidenav
      }
    }
    case SET_GLOBAL_IS_SMALL_SCREEN: {
      return {
        ...state,
        globalIsSmallScreen: payload.globalIsSmallScreen
      }
    }
    default: {
      return state
    }
  }
}

export default appConfigReducer
