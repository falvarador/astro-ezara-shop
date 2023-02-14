// import { EventDispatcherContextProvider, useEventDispatcher } from "@/shared";
"use client";

type Product = {
  name: string;
  description: string;
};

export default function Product({ name, description }: Product) {
  function addProduct() {
    console.log("addProduct");
  }

  return (
    <div>
      <h1>Product</h1>
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={addProduct}>Add</button>
    </div>
  );
}
