const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stream = new Schema(
  {
    registered: {
      type: Number,
    },
    unregistered: {
      type: Number,
    },
    id: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Stream = mongoose.model("stream", stream);

module.exports = { Stream };
