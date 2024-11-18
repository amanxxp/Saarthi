const { Kafka } = require("kafkajs");
const messageModel = require("../model/messageModel");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.29.67:9092"],
});

let producer = null;

async function createProducer() {
  if (producer) return producer;

  const _producer = kafka.producer();
  await _producer.connect();
  producer = _producer;
  return producer;
}

async function produceMessage({ from, to, message }) {
  const producer = await createProducer();

  try {
    const result = await producer.send({
      topic: "Messages",
      messages: [
        {
          key: `message-${Date.now()}`,
          value: JSON.stringify({ from, to, message }),
        },
      ],
    });

    if (result && result.length > 0) {
      console.log("Message successfully sent:", result);
      return true;
    } else {
      console.error("Failed to send message.");
      return false;
    }
  } catch (err) {
    console.error("Error while sending message:", err);
    return false;
  }
}
async function startMessageConsumer() {
  console.log("Consumer is running..");

  const consumer = kafka.consumer({ groupId: "default" });

  try {
    // Connect and Subscribe to the Kafka topic
    await consumer.connect();
    await consumer.subscribe({ topic: "Messages", fromBeginning: true });

    // Consume messages
    await consumer.run({
      eachMessage: async ({ topic, partition, message, pause }) => {
        if (!message.value) return;

        // Parse the message
        const parsedMessage = JSON.parse(message.value.toString());
        const { from, to, message: msgContent } = parsedMessage;

        console.log(
          `New message received from ${from} to ${to}: ${msgContent}`
        );

        try {
          // Save the message to MongoDB
          const newMessage = await messageModel.create({
            message: { text: msgContent }, // Save only the content
            users: [from, to],
            sender: from,
          });

          console.log("Message saved to MongoDB:", newMessage);
        } catch (err) {
          // If there's an error saving the message to DB
          console.log("Error saving message to MongoDB:", err);

          // Pause the consumer and retry after 60 seconds
          pause();
          setTimeout(() => {
            consumer.resume([{ topic: "Messages" }]);
          }, 60 * 1000); // Retry after 60 seconds
        }
      },
    });
  } catch (err) {
    console.log("Error starting Kafka consumer:", err);
  }
}

// Export both functions
module.exports = {
  createProducer,
  produceMessage,
  startMessageConsumer,
};
