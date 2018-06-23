import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';

import { App } from './App';
import { MessagesService } from './MessagesService';

import 'semantic-ui-css/semantic.min.css';

const URL = 'https://spotim-demo-chat-server.herokuapp.com';

const socket = io(URL);
const messagesService = new MessagesService(socket);

render(
  <App messagesService={messagesService} />,
  document.getElementById('root')
);
