import { createContext, ReactNode, useContext, useEffect } from "react";

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
  console.log("EventDispatcherContextProvider is called");
  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  );
}
