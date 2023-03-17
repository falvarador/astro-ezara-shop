import {
  LocationProvider,
  Router,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import Header from "~/header.js";

import files from "ls:./pages";

console.log(files);

// Generate a Route component and URL for each "page" module:
const routes = files
  .filter((fileName) => fileName.endsWith(".js"))
  .map((name) => ({
    Route: lazy(() => import(`./pages/${name}`)),
    url: "/" + name.replace(/(index)?\.\w+$/, ""), // strip file extension and "index"
  }));

console.log(routes);

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            {routes.map(({ Route, url }) => (
              <Route path={url} />
            ))}
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}

// export const prerender = async (data) =>
//   (await import("preact-iso/prerender")).default(<App {...data} />);
