import UserModel from "../models/model.js";

export const addUser = async (req, res) => {
  const bodyUser = req.body;
  if (!bodyUser.nama || !bodyUser.tanggal_lahir || !bodyUser.email) {
    res.status(401).json({
      status: 401,
      errorMessage: `Validation Error : nama: ${bodyUser.nama}, tanggal_lahir: ${bodyUser.tanggal_lahir}, email: ${bodyUser.email}`,
    });
    return;
  }
  const newUserModel = new UserModel({
    nama: bodyUser.nama,
    tanggal_lahir: bodyUser.tanggal_lahir,
    email: bodyUser.email,
  });
  const newUser = await newUserModel.save();
  const updatedUserAfterSave = await UserModel.find();

  res.status(201).json({
    message: "User succesfully added!",
    addedTodo: newUser,
    updatedUserAfterSave: updatedUserAfterSave,
  });
  response.code(400);

  return response;
};
