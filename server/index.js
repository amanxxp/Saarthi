const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messageRoute");
const postRoutes = require("./routes/postRoutes");
const app = express();
const socket = require("socket.io");
const { startMessageConsumer } = require("./services/kafka");
const client = require("./services/RedisClient.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/message", messageRoute);
app.use("/api/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("DB Connetion Successfull");
    await startMessageConsumer();
    console.log("Kafka Consumer started and listening for messages");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`server Started on Port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map(); //This is a global Map object used to store the mapping between user IDs and their corresponding socket IDs.

io.on("connection", (socket) => {
  //Listens for new client connections
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    // Listens for the "add-user" event from the connected client. This event typically sends the user's ID when the user logs in or connects.
    onlineUsers.set(userId, socket.id); // Stores the user ID and associated socket ID in the onlineUsers map. This way, the server knows which socket is connected to which user.
  });

  socket.on("send-msg", (data) => {
    //Listens for the "send-msg" event, which is typically triggered when a user sends a message.
    const sendUserSocket = onlineUsers.get(data.to); //Retrieves the socket ID of the recipient (data.to) from the onlineUsers map.
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message); // Sends the message (data.message) to the recipient's socket. The .to() method specifies the target socket ID, and .emit() sends the "msg-recieve" event to that specific client.
    }
  });
});

/*
Global Online Users Map:
js
Copy code
global.onlineUsers = new Map();
global.onlineUsers: This is a global Map object used to store the mapping between user IDs and their corresponding socket IDs.
Why use a Map?: A Map is preferred here because it provides efficient lookups (O(1)) for retrieving socket IDs by user ID.
Connection Event:
js
Copy code
io.on("connection", (socket) => {
  global.chatSocket = socket;
io.on("connection", ...): Listens for new client connections. When a user connects, a new socket object is created, representing that connection.
global.chatSocket = socket: This assigns the current socket to a global variable (not typically necessary in most cases).
Handling "add-user" Event:
js
Copy code
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });
socket.on("add-user", ...): Listens for the "add-user" event from the connected client. This event typically sends the user's ID when the user logs in or connects.
onlineUsers.set(userId, socket.id): Stores the user ID and associated socket ID in the onlineUsers map. This way, the server knows which socket is connected to which user.
Handling "send-msg" Event:
js


Copy code
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
socket.on("send-msg", ...): Listens for the "send-msg" event, which is typically triggered when a user sends a message.
const sendUserSocket = onlineUsers.get(data.to): Retrieves the socket ID of the recipient user (data.to) from the onlineUsers map.
if (sendUserSocket): Checks if the recipient is online (i.e., their socket ID exists in the map).
socket.to(sendUserSocket).emit("msg-recieve", data.message): Sends the message (data.message) to the recipient's socket. The .to() method specifies the target socket ID, and .emit() sends the "msg-recieve" event to that specific client.
*/
