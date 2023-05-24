import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MIIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MIIN]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MIIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}