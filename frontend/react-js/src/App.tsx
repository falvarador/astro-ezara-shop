import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "~/components";

function App() {
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

export default App;
