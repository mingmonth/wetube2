import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const model = mongoose.model("User", UserSchema);
export default model;
