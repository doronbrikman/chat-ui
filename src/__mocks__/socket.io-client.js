let EVENTS = {};
function emit(event, ...args) {
  EVENTS[event].forEach(func => func(...args));
}
const socket = {
  open() {},
  close() {},
  on(event, func) {
    if (EVENTS[event]) {
      return EVENTS[event].push(func);
    }
    EVENTS[event] = [func];
  },
  emit
};

// export const mockPlaySoundFile = jest.fn();

export function io(url) {
  return socket;
}

export const serverSocket = { emit };

// cleanup helper
export function cleanup() {
  EVENTS = {};
}

export default io;
