import React from 'react';
import { Message, Image } from 'semantic-ui-react';

import { Message as MessageType } from './MessagesService';

type Props = {
  isMe: boolean;
  message: MessageType;
};

export const ChatMessage: React.StatelessComponent<Props> = ({
  isMe,
  message: { username, avatar, text }
}) => (
  <Message icon color={isMe ? 'green' : 'blue'}>
    <Image src={avatar} size="mini" />
    <Message.Content>
      <Message.Header>{username}</Message.Header>
      {text}
    </Message.Content>
  </Message>
);
