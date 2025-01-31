type Handler = (payload: HandlerPayload) => void;
type HandlerPayload = Record<string, any> | undefined;

export class EventEmitter {
  listeners: Map<string, Set<Handler>> = new Map();

  on = (eventName: string, handler: Handler) => {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }

    this.listeners.get(eventName)?.add(handler);
  };

  emit = (eventName: string, payload: HandlerPayload) => {
    const listeners = this.listeners.get(eventName);

    if (!listeners) {
      return;
    }

    listeners.forEach((item) => item(payload));
  };

  off = (eventName: string, handler: Handler) => {
    const listeners = this.listeners.get(eventName);

    if (!listeners) {
      return;
    }

    listeners.delete(handler);
  };
}
