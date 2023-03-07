import "flowbite";
import { useRoutes } from "@solidjs/router";

import { Header } from "~/components";
import { routes } from "~/config";

const Routes = useRoutes(routes);

function App() {
  return (
    <main>
      <Header />
      <section class="container mx-auto">
        <Routes />
      </section>
    </main>
  );
}

export default App;
