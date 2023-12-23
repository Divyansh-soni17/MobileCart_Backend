import mongoose from "mongoose";
const { Schema } = mongoose;
 

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const User = mongoose.model("User", userSchema);
export default User;
