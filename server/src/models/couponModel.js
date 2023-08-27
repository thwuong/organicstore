import mongoose, { Schema } from "mongoose";

const CouponSchema = new Schema({
  couponCode: {
    type: String,
    length: 6,
  },
  description: {
    type: String,
  },
  discount: {
    type: Number,
    required: [true, "Coupon discount required"],
  },
});

export default mongoose.model("coupon", CouponSchema);
