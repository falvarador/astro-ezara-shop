import { Home, homeLoader, NoMatch } from "~/app/";
import App from "~/App";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
      // {
      //   path: "dashboard",
      //   loader: dashboardLoader,
      //   element: <Dashboard />,
      // },
      // {
      //   path: "redirect",
      //   loader: redirectLoader,
      // },
      // {
      //   path: "*",
      //   element: <NoMatch />,
      // },
    ],
  },
];
