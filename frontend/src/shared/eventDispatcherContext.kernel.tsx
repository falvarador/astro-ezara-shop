import { createContext, ReactNode, useContext } from "react";

import { EventDispatcher } from "@/shared";

const eventDispatcher = new EventDispatcher();

const EventDispatcherContext = createContext<EventDispatcher>(eventDispatcher);

export function useEventDispatcher() {
  return useContext(EventDispatcherContext);
}

export function EventDispatcherContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  );
}
