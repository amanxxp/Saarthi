const messageModel = require("../model/messageModel");
const { produceMessage } = require("../services/kafka.js");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = produceMessage({ from, to, message });
    if (data) console.log("produced Message by kafka producer");
    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
module.exports.getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await messageModel
      .find({
        users: {
          $all: [from, to],
        },
      })
      .sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};
