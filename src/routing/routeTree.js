import { createRootRoute } from "@tanstack/react-router"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dashboard"
import RootLayout from "../RootLayout"
import { homePageRoute } from "./home"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree = rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])