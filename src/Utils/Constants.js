export const REGEX = {
  phone: /^\+\d{1}$/
}

export const SIDEBAR_MENU = [
  {
    path: "/admin/mes-alertes",
    title: "Mes alertes"
  },
  {
    path: "/admin/mes-assets",
    title: "Mes assets"
  },
  {
    path: "/admin/mes-contacts",
    title: "Mes contacts"
  },
  {
    path: "/admin/profil",
    title: "Profil"
  },
  {
    path: "/user/base",
    title: "Base"
  }
]

export const ENDPOINT = {
  AUTHENTICATION: {
    // LOGIN: "/users/AdminLogin",
    LOGIN: "/auth",
    CHECK_PROTECTED_ROUTE: "/check-protected-route",
    CHECK_PROTECTED_ROUTE_FAIL: "/check-protected-route-fail"
  },
  USER: {
    GET_CURRENT_USER: "/profil"
  }
}
