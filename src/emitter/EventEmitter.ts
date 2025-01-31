type Handler = unknown;
type HandlerPayload = unknown;

// Необходимо реализовать. Пункт 2 из постановки
export class EventEmitter {
  on = (eventName: string, handler: Handler) => {
    console.log(eventName, handler);
  };

  emit = (eventName: string, payload: HandlerPayload) => {
    console.log(eventName, payload);
  };

  off = (eventName: string, handler: Handler) => {
    console.log(eventName, handler);
  };
}
