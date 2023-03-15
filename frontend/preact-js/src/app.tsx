import "preact/devtools";
import { Signal, signal } from "@preact/signals";
import preactLogo from "./assets/preact.svg";
import "./app.css";

const count = signal(0);

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <Counter count={count} />
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}

function Counter({ count }: { count: Signal<number> }) {
  return (
    <div class="card">
      <button
        onClick={() => {
          count.value++;
        }}
      >
        count is: {count}
      </button>
      <p>
        Edit <code>src/app.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
