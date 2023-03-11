import React from "react";
import ReactDOM from "react-dom/client";

import { routes } from "~/config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={null} />
  </React.StrictMode>
);
