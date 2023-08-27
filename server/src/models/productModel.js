import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    categories: [{ type: Schema.Types.ObjectId, ref: "category" }],
    productName: {
      type: String,
      required: [true, "Product Name Required"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price Required"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    isDiscount: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", ProductSchema);
