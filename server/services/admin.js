const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.29.67:9092"],
});

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [Messages]");
  await admin.createTopics({
    topics: [
      {
        topic: "Messages",
        numPartitions: 1,
      },
    ],
  });
  console.log("Topic Created Success [Messages]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();
