import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    productList: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        subTotal: {
          type: Number,
        },
      },
    ],
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "coupon",
    },
    note: {
      type: String,
    },
    subTotal: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("order", OrderSchema);
