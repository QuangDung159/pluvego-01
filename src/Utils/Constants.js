export const REGEX = {
  phone:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
}

export const SIDEBAR_MENU = [
  {
    path: "/mes-alertes",
    title: "Mes alertes"
  },
  {
    path: "/mes-assets",
    title: "Mes assets"
  },
  {
    path: "/mes-contacts",
    title: "Mes contacts"
  },
  {
    path: "/profil",
    title: "Profile"
  },
  {
    path: "/base",
    title: "Base"
  }
]

export const ENDPOINT = {
  AUTHENTICATION: {
    LOGIN: "/users/AdminLogin",
    CHECK_PROTECTED_ROUTE: "/check-protected-route",
    CHECK_PROTECTED_ROUTE_FAIL: "/check-protected-route-fail"
  },
  USER: {
    GET_CURRENT_USER: "/profil"
  }
}
