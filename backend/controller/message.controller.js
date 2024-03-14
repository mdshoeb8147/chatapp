import Conversion from "../models/conversion.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversion = await Conversion.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversion) {
      conversion = await Conversion.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversion.messages.push(newMessage._id);
    }

    // await conversion.save();
    // await newMessage.save();

    await Promise.all([conversion.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
