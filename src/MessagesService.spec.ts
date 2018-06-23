import io from 'socket.io-client';

import { MessagesService, Message } from './MessagesService';

jest.mock('socket.io-client');

test('should emit the message', done => {
  const socket = io('');
  const messagesService = new MessagesService(socket);
  messagesService.connect();

  const message: Message = {
    username: 'doron',
    avatar: 'img',
    text: 'hello'
  };

  messagesService.subscribeToMessages(msg => {
    expect(msg.username).toBe(message.username);
    expect(msg.avatar).toBe(message.avatar);
    expect(msg.text).toBe(message.text);
    done();
  });

  messagesService.sendMessage(message);
});
