import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="container">
      <h1>Hello World!!!</h1>
    </div>
  );
}

export default App;
