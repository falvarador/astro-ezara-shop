import { DomainEvent, EventType } from "@/shared";

type EventSubscriber = (domainEvent: DomainEvent) => void;

export class EventDispatcher {
  private subscribers = new Map<EventType, EventSubscriber[]>();

  public subscribe(type: EventType, subscriber: EventSubscriber) {
    if (!this.subscribers.has(type)) {
      this.subscribers.set(type, []);
    }

    const eventSubscribers = this.subscribers.get(type);

    if (eventSubscribers) {
      eventSubscribers.push(subscriber);
    }
  }

  public unsubscribe(type: EventType, subscriber: EventSubscriber) {
    if (!this.subscribers.has(type)) {
      return;
    }

    const eventSubscribers = this.subscribers.get(type);

    eventSubscribers?.filter((s) => s !== subscriber);
  }

  public dispatch(event: DomainEvent) {
    const eventSubscribers = this.subscribers.get(event.type);

    if (!eventSubscribers) {
      return;
    }

    eventSubscribers.forEach((s) => s(event));
  }
}
