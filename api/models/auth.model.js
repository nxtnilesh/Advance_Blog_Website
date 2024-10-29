import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});
const User = mongoose.model("User",UserSchema);
export default User;    
