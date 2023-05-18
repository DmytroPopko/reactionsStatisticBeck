const { Stream } = require("./schemas/stream");

const getAllStreams = async () => {
  const stream = await Stream.find({});
  return stream;
};

const getStreamById = (id) => {
  return Stream.findOne({ _id: id });
};

const createStream = async ({ registered, unregistered }) => {
  const stream = new Stream({ registered, unregistered });
  await stream.save();
  return stream
};

const updateStream = async (id, fields) => {
  return Stream.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeStream = (id) => {
  return Stream.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllStreams,
  getStreamById,
  createStream,
  updateStream,
  removeStream,
};
