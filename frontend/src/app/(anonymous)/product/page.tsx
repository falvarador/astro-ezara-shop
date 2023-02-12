// import { EventDispatcherContextProvider, useEventDispatcher } from "@/shared";
"use client";

import { createProductEvent } from "@/app/(anonymous)/product/events";

import { ProductDummy } from "@/app/(anonymous)/product/models";

import { useEventDispatcher } from "@/shared";

type Product = {
  name: string;
  description: string;
};

export default function Product({ name, description }: Product) {
  const eventDispatcher = useEventDispatcher();

  function addProduct() {
    console.log("addProduct");
    eventDispatcher.dispatch(
      createProductEvent({ id: 1, name, description } as ProductDummy)
    );
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
