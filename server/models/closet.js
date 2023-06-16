const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClosetSchema = new Schema({
  brand: { type: String, required: true },
  cloth: { type: String, required: true },
  season: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  image: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});

module.exports = new mongoose.model('Closet', ClosetSchema);
