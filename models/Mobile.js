import mongoose from "mongoose";
const { Schema } = mongoose;

const mobileSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product price"],
    maxlength: [8, "Price cannot exceed 8 characters"],
  },
  type: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      commentdate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Mobile = mongoose.model("Mobile", mobileSchema);
export default Mobile;
