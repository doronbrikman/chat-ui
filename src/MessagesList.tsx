import React from 'react';

import { Message } from './MessagesService';
import { User } from './user';

import { ChatMessage } from './Message';

type Props = {
  user: User;
  messages: Message[];
};

type State = {};

export class MessagesList extends React.Component<Props, State> {
  node: HTMLUListElement;
  autoScroll = true;

  handleScroll = () => {
    const { scrollTop, scrollHeight, offsetHeight } = this.node;
    const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);
    this.autoScroll = distanceFromBottom < 10;
  };

  scrollToBottom() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.autoScroll) {
      this.scrollToBottom();
    }
  }

  handleRef = (ref: HTMLUListElement) => {
    this.node = ref;
  };

  render() {
    const { user, messages } = this.props;

    return (
      <ul
        ref={this.handleRef}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          margin: 0,
          padding: 0
        }}
        onScroll={this.handleScroll}
      >
        {messages.map(message => (
          <ChatMessage
            key={message.timestamp}
            isMe={user.username === message.username}
            message={message}
          />
        ))}
      </ul>
    );
  }
}
