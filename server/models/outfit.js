const mongoose = require("mongoose");
const { Schema } = mongoose;

const OutfitSchema = new Schema({
  brand: { type: String, required: true },
  cloth_name: { type: String, required: true },
  type: { type: String, required: true },
  season: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  image: {
    type: [String],
    required: true,
  },
});

module.exports = new mongoose.model("Outfit", OutfitSchema);
