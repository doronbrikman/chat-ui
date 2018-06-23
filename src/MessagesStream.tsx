import React from 'react';

import { MessagesService, Message } from './MessagesService';

type Props = {
  service: MessagesService;
  children: (messages: Message[]) => JSX.Element;
};

type State = {
  messages: Message[];
};

export class MessageStream extends React.Component<Props, State> {
  state: State = {
    messages: []
  };

  componentDidMount() {
    this.props.service.subscribeToMessages(this.handleEvent);
  }

  handleEvent = (data: Message) => {
    const { messages } = this.state;
    messages.push(data);

    this.setState({ messages });
  };

  render() {
    return this.props.children(this.state.messages);
  }
}
