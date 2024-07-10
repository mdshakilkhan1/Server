import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
     type: String,
     required: true,
      unique: [true, "fullName is required !"]
     },
  email: {
     type: String,
      required: true,
       unique: [true, "Email is required !"]
     },
  password: { 
    type: String,
     required:  [true, "Password is required !"]
     },
  profile_picture: {
     type: String
     },
  bio: {
     type: String,
     default: ""
     },

});

const User = mongoose.model('User', userSchema);

export default User;