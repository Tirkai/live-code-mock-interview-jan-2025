/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { EventEmitter } from "../emitter/EventEmitter";

const eventEmitter = new EventEmitter();

export const EventEmitterContext = createContext<{
  eventEmitter: EventEmitter;
}>({ eventEmitter });

export const EventEmitterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EventEmitterContext.Provider value={{ eventEmitter }}>
      {children}
    </EventEmitterContext.Provider>
  );
};

export const useEventEmitter = () => {
  return useContext(EventEmitterContext).eventEmitter;
};
