import { render } from "preact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "~/config";

const router = createBrowserRouter(routes);

render(
  <RouterProvider router={router} fallbackElement={null} />,
  document.getElementById("app") as HTMLElement
);
