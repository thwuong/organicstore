import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  rate: {
    type: Number,
    default: 5,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("review", ReviewSchema);
