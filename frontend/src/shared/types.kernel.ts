export type EventType = string;

export interface DomainEvent {
  type: EventType;
  timestamp: Date;
}
