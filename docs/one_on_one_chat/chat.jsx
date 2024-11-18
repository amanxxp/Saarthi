import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Connect to Socket.IO server
const socket = io('http://localhost:3000');

function ChatApp() {
  const [userId, setUserId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Register the user when they connect
    socket.emit('register', userId);

    // Listen for private messages
    socket.on('private_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, `${data.senderId}: ${data.message}`]);
    });

    return () => {
      socket.off('private_message');
    };
  }, [userId]);

  const sendMessage = () => {
    if (receiverId && message) {
      // Send message to a specific receiver
      socket.emit('private_message', { receiverId, message });
      setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Your ID" />
      <input type="text" value={receiverId} onChange={(e) => setReceiverId(e.target.value)} placeholder="Receiver ID" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
      <button onClick={sendMessage}>Send</button>

      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatApp;
