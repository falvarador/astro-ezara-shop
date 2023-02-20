import { Outlet } from "@remix-run/react";
import { Footer, Header } from "~/components";

export function MainLayout() {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
}
