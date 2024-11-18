const socket = io('http://localhost:3000');

// Join a room
socket.emit('joinRoom', 'room1');

// Send a message
socket.emit('sendMessage', 'room1', 'Hello, Room 1!');

// Listen for messages
socket.on('receiveMessage', (message) => {
  console.log('New message:', message);
});
