import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "~/config";

const router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={null} />
  </React.StrictMode>
);
