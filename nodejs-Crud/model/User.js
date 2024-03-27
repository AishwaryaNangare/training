import { Schema, model } from "mongoose";

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase:true
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User",UserSchema)
export default User
