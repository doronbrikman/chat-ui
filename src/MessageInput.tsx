import React from 'react';
import { Image, Input, Button } from 'semantic-ui-react';

import { User } from './user';
import { Message } from './MessagesService';

type Props = {
  user: User;
  onUsernameChange: (username: string) => void;
  onSubmit: (msg: Message) => void;
};

type State = {
  message: string;
  disableSend: boolean;
};

export class MessageInput extends React.Component<Props, State> {
  state: State = {
    message: '',
    disableSend: true
  };

  handleSubmit = () => {
    const message: Message = {
      username: this.props.user.username,
      avatar: this.props.user.avatar,
      text: this.state.message
    };

    this.props.onSubmit(message);
    this.setState({ message: '', disableSend: true });
  };

  handleUserNameChange = ({ target }: any) => {
    this.props.onUsernameChange(target.value);
  };

  handleChangeText = ({ target }: any) => {
    const message = target.value;
    const disableSend = message === '';

    this.setState({ message, disableSend });
  };

  render() {
    const { user } = this.props;

    return (
      <div
        style={{ display: 'flex', justifyContent: 'space-around', height: 30 }}
      >
        <Image src={user.avatar} size="mini" />

        <Input
          placeholder="username"
          value={user.username}
          onChange={this.handleUserNameChange}
        />

        <Input
          placeholder="Type Somthing..."
          value={this.state.message}
          onChange={this.handleChangeText}
        />

        <Button onClick={this.handleSubmit} disabled={this.state.disableSend}>
          Send
        </Button>
      </div>
    );
  }
}
