import React from 'react';
import { mount } from 'enzyme';

import { ChatMessage } from './Message';
import { Message } from './MessagesService';

test('renders correctly', () => {
  const message: Message = {
    username: 'test',
    avatar: 'image-link',
    text: 'Hello'
  };

  const wrapper = mount(<ChatMessage isMe message={message} />);
  expect(wrapper).toMatchSnapshot();
});
