import React from "react";
import ReactDOM from "react-dom/client";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import App from "~/App";

import "~/index.css";

const queryClient = new QueryClient();

const dehydratedState = dehydrate(queryClient);

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  </React.StrictMode>
);
