import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "../pages/HomePage"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dashboard"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree = rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])