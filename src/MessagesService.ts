const EVENT = 'spotim/chat';

export type Message = {
  avatar: string;
  username: string;
  text: string;
  timestamp?: number;
};

export class MessagesService {
  constructor(private socket: SocketIOClient.Socket) {}

  connect() {
    this.socket.open();
  }

  sendMessage(msg: Message) {
    msg.timestamp = Date.now();
    this.socket.emit(EVENT, msg);
  }

  subscribeToMessages(cb: (msg: Message) => void) {
    this.socket.on(EVENT, cb);
  }

  disconnect() {
    this.socket.close();
  }
}
