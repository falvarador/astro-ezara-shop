import { DomainEvent, EventType } from "@/shared";

export const userCreatedEvent: EventType = "user.created";

type Product = {
  id: string;
  email: string;
  job: string;
};

export interface CreateProductEvent extends DomainEvent {
  user: Product;
}

export default function createProductEvent(
  product: Product
): CreateProductEvent {
  return {
    type: userCreatedEvent,
    timestamp: new Date(),
    user: product,
  };
}
