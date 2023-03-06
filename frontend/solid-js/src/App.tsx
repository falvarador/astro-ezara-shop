import { Counter, Header } from "~/components";

import "flowbite";

function App() {
  return (
    <main>
      <Header />
      <section class="container mx-auto flex items-center justify-center mt-8">
        <Counter />
        <div
          class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </div>
      </section>
    </main>
  );
}

export default App;
