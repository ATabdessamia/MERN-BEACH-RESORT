import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: String,
  slug: String,
  type: String,
  price: Number,
  size: Number,
  capacity: Number,
  pets: { type: Boolean, default: false },
  breakfast: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  description: String,
  extras: [String],
  images: [String],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
