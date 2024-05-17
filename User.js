import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  verification: {
    type: Boolean,
    default: false,
    require: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
