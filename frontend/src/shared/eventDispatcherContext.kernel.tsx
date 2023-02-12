/* import { createContext, ReactNode, useContext, useEffect } from "react";

import { userCreatedEvent } from "@/app/(anonymous)/product/event";

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
  useEffect(() => {
    eventDispatcher.subscribe(userCreatedEvent, (event) => {
      console.log(event);
    });
  }, []);

  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  );
}
 */
