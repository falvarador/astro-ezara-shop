/* eslint-disable react-hooks/rules-of-hooks */
import { DomainEvent, useEventDispatcher } from "@/shared";

import { productCreatedEvent } from "@/app/(anonymous)/product/events";

const eventDispatcher = useEventDispatcher();

eventDispatcher.subscribe(productCreatedEvent, (event: DomainEvent) => {
  console.log(event);
});
