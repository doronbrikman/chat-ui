import React from 'react';
import { mount } from 'enzyme';
import io from 'socket.io-client';

import { App } from './App';
import { MessagesService, Message } from './MessagesService';
import { ChatMessage } from './Message';

jest.mock('socket.io-client');

jest.mock('./user');

test('renders correctly', () => {
  const socket = io('');
  const messagesService = new MessagesService(socket);

  const wrapper = mount(<App messagesService={messagesService} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders 1 message', () => {
  const socket = io('');
  const messagesService = new MessagesService(socket);

  const message: Message = {
    username: 'doron',
    avatar: 'img',
    text: 'hello'
  };

  // mocking sending a message to server
  messagesService.sendMessage(message);

  const wrapper = mount(<App messagesService={messagesService} />);
  expect(wrapper.find(ChatMessage)).toBeTruthy();
});
