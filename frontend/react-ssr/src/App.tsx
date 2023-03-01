import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Header } from "~/components";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
