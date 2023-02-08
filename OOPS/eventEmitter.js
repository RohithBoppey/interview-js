class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    // Subscribe to an event
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }
  
    // Unsubscribe from an event
    off(eventName, callback) {
      if (!this.events[eventName]) {
        return;
      }
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }
  
    // Create an event
    createEvent(eventName) {
      this.events[eventName] = [];
    }
  
    // Delete an event
    deleteEvent(eventName) {
      delete this.events[eventName];
    }
  
    // Trigger an event
    emit(eventName, ...args) {
      if (!this.events[eventName]) {
        return;
      }
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
  
  const eventEmitter = new EventEmitter();
  eventEmitter.createEvent("newEvent");
  
  const callback1 = (data) => {
    console.log("Callback 1 -", data);
  };
  const callback2 = (data) => {
    console.log("Callback 2 -", data);
  };
  
  eventEmitter.on("newEvent", callback1);
  eventEmitter.on("newEvent", callback2);
  
  eventEmitter.emit("newEvent", "Hello World!");
  // Output: "Callback 1 - Hello World!"
  // Output: "Callback 2 - Hello World!"
  
  eventEmitter.off("newEvent", callback1);
  eventEmitter.emit("newEvent", "Hello World!");
  // Output: "Callback 2 - Hello World!"