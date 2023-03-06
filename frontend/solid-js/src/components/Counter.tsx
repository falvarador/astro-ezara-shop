import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="w-52 rounded-full dark:text-white dark:bg-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-8 py-4"
      onclick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
