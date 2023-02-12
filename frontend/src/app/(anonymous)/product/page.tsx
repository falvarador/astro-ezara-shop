import { EventDispatcherContextProvider, useEventDispatcher } from "@/shared";
import { createProductEvent } from "./event";
import { ProductDummy } from "./models";

type Product = {
  name: string;
  description: string;
};

export default function Product({ name, description }: Product) {
  const eventDispatcher = useEventDispatcher();

  function addProduct() {
    eventDispatcher.dispatch(
      createProductEvent({
        product: { id: 1, name, description } as ProductDummy,
      })
    );
  }

  return (
    <EventDispatcherContextProvider>
      <div>
        <h1>Product</h1>
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={addProduct}>Add</button>
      </div>
    </EventDispatcherContextProvider>
  );
}
