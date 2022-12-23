import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

const UserModel = model("User", userSchema);

export default UserModel;
