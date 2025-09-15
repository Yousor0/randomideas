const mongoose = require("mongoose");

const IdeaScheme = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Pleas add a atext field"],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Idea", IdeaScheme);
