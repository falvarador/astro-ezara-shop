import { Navigate, RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

import { Home } from "~/app/";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("~/app/Home/Home.js")),
  },
  // {
  //   path: "/issues",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: " ",
  //       component: lazy(() => import("~/app/Issues/Issues.js")),
  //     },
  //     {
  //       path: "/issue/:id",
  //       component: lazy(() => import("~/app/Issues/Issue.js")),
  //     },
  //     {
  //       path: "*",
  //       element: <Navigate href="issues/list" />,
  //     },
  //   ],
  // },
  {
    path: "*",
    component: lazy(() => import("~/app/NoMatch.js")),
  },
];
