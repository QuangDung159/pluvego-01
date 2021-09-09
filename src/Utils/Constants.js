export const REGEX = {
  phone: /^\+\d{1}$/
}

export const SIDEBAR_MENU_ADMIN = [
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
  }
]

export const SIDEBAR_MENU_USER = [
  {
    path: "/user/mes-alertes",
    title: "Mes alertes"
  },
  {
    path: "/user/mes-assets",
    title: "Mes assets"
  },
  {
    path: "/user/mes-contacts",
    title: "Mes contacts"
  },
  {
    path: "/user/profil",
    title: "Profil"
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
