import { Server } from 'socket.io';

const io = new Server(server);

// Store user socket IDs
let users: { [userId: string]: string } = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Register user ID with their socket ID
  socket.on('register', (userId) => {
    users[userId] = socket.id;  // Store the user and their socket ID
  });

  // Handle private messages
  socket.on('private_message', (data) => {
    const { receiverId, message } = data;
    const receiverSocketId = users[receiverId];  // Get receiver's socket ID

    if (receiverSocketId) {
      // Emit message to the receiver's socket
      io.to(receiverSocketId).emit('private_message', { senderId: socket.id, message });
    }
  });

  // Clean up on disconnect
  socket.on('disconnect', () => {
    for (let userId in users) {
      if (users[userId] === socket.id) {
        delete users[userId];  // Remove user from list on disconnect
        break;
      }
    }
  });
});
