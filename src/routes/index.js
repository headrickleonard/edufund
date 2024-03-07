import { lazy } from "react";
import { routerProps } from "../types";

// export type route = {
//     path: string,
//     guest: boolean,
//     component: React.LazyExoticComponent<React.FunctionComponent<routerProps>>
// }

export const routes = [
    {
        path: "/",
        guest: true,
        component: lazy(()=>import("../pages/home"))
    },
    {
        path: "/about-us",
        guest: true,
        component: lazy(()=>import("../pages/about"))
    },
    {
        path: "/",
        guest: true,
        component: lazy(()=>import("../pages/efa"))
    }
]