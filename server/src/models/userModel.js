import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "User email required"],
      validate: {
        validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
        message: (props) => `${props.value} is not a email`,
      },
    },
    password: {
      type: String,
      required: [true, "User password required"],
    },
    isComfirmed: {
      type: Boolean,
      default: false,
    },
    comfirmedOn: {
      type: Date,
    },
    location: {
      ward: {
        type: String,
      },
      district: {
        type: String,
      },
      province: {
        type: String,
      },
    },
    phone: {
      type: String,
    },
    roles: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", UserSchema);
