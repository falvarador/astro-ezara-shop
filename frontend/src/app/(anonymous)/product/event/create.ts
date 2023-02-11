import { DomainEvent, EventType } from "@/shared";

export const userCreatedEvent: EventType = "user.created";

interface User {
  id: string;
  email: string;
  job: string;
}

export interface UserCreatedEvent extends DomainEvent {
  user: User;
}

export default function createUserCreatedEvent(user: User): UserCreatedEvent {
  return {
    type: userCreatedEvent,
    timestamp: new Date(),
    user,
  };
}
