import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import App from "~/App";

export async function render() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["key"], () => Promise.resolve("value"));
  const dehydratedState = dehydrate(queryClient);

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <App />
        </Hydrate>
      </QueryClientProvider>
    </React.StrictMode>
  );

  queryClient.clear();

  return { html };
}
