import "preact/devtools";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "~/components";

export default function App() {
  return (
    <section className="container mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </section>
  );
}
