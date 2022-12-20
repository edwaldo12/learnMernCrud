import mongoose from "mongoose";

const UserModel = mongoose.model("User", {
  nama: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default UserModel;
