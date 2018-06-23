import React from 'react';

import { MessagesService, Message as MessageType } from './MessagesService';
import { UserStore, User } from './user';
import { MessageStream } from './MessagesStream';
import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';
import { avatars } from './utils';

export type State = {
  user: User;
};

type Props = {
  messagesService: MessagesService;
};

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.props.messagesService.connect();

    const user = new UserStore();
    if (user.avatar === '') {
      const randomIndex = Math.floor(Math.random() * 5);
      user.avatar = avatars[randomIndex];
    }

    this.state = { user };
  }

  handleUsernameChange = (username: string) => {
    const user = this.state.user;
    user.username = username;

    this.setState({ user });
  };

  componentWillUnmount() {
    this.props.messagesService.disconnect();
  }

  render() {
    const { messagesService } = this.props;
    const { user } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          maxWidth: 500,
          margin: '0 auto',
          padding: 4
        }}
      >
        <div style={{ display: 'flex', flex: 1, padding: 4 }}>
          <MessageStream service={messagesService}>
            {messages => <MessagesList user={user} messages={messages} />}
          </MessageStream>
        </div>
        <div>
          <MessageInput
            user={user}
            onUsernameChange={this.handleUsernameChange}
            onSubmit={(msg: MessageType) => messagesService.sendMessage(msg)}
          />
        </div>
      </div>
    );
  }
}
