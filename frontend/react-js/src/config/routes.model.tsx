import { Navigate } from "react-router-dom";
import { Issues, Issue, NoMatch } from "~/app/";
import App from "~/App";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      { path: "list", element: <Issues /> },
      { path: "issue/:id", element: <Issue /> },
      { path: "*", element: <Navigate to="list" /> },
    ],
  },

  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
];
