io.on('connection', (socket) => {
    console.log('User connected');
    
    // User joins a room
    socket.on('joinRoom', (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });
  
    // User sends a message to the room
    socket.on('sendMessage', (room, message) => {
      io.to(room).emit('receiveMessage', message);
    });
  
    // Disconnecting
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  