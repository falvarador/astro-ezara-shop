import { createSignal } from "solid-js";
import { Counter, Header } from "~/components";

function App() {
  return (
    <main>
      <Header />
      <section class="container mx-auto flex items-center justify-center mt-8">
        <Counter />
      </section>
    </main>
  );
}

export default App;
