import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("~/app/Home/Home.js")),
  },
  {
    path: "/issues",
    component: lazy(() => import("~/app/Issues/Issues.js")),
    children: [
      {
        path: "/issue/:id",
        component: lazy(() => import("~/app/Issues/Issue.js")),
      },
      {
        path: " ",
        component: lazy(() => import("~/app/Issues/Issues.js")),
      },
      {
        path: "*",
        element: lazy(() => import("~/app/Issues/Issues.js")),
      },
    ],
  },
  {
    path: "*",
    component: lazy(() => import("~/app/NoMatch.js")),
  },
];
