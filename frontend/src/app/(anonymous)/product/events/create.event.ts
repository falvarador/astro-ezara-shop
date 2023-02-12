import { DomainEvent, EventType } from "@/shared";

import { ProductDummy } from "../models";

export const productCreatedEvent: EventType = "user.created";

export interface CreateProductEvent extends DomainEvent {
  product: ProductDummy;
}

export function createProductEvent(product: ProductDummy): CreateProductEvent {
  return {
    type: productCreatedEvent,
    timestamp: new Date(),
    product: product,
  };
}
