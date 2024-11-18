import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the server

// Listen for incoming messages
socket.on('message', (msg) => {
  console.log(msg); // Log the message from the server
});

// Emit a message to the server
socket.emit('chat message', 'Hello, world!');

// Listen for chat messages from other clients
socket.on('chat message', (msg) => {
  console.log('New message:', msg); // Log received chat messages
});
