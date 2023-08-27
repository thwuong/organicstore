import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, "Category name required"],
  },
  description: {
    type: String,
  },
});

export default mongoose.model("category", CategorySchema);
