import UserModel from "../models/model.js";

export const addUser = async (req, res) => {
  const { nama, tanggal_lahir, email } = req.body;
  console.log("this is name : " + nama);
  if (!nama || !tanggal_lahir || !email) {
    res.status(401).json({
      status: 401,
      errorMessage: `Validation Error : nama: ${nama}, tanggal_lahir: ${tanggal_lahir}, email: ${email}`,
    });
    return;
  }
  const newUserModel = new UserModel({
    nama: nama,
    tanggal_lahir: tanggal_lahir,
    email: email,
  });
  const newUser = await newUserModel.save();
  // const updatedUserAfterSave = await UserModel.find();

  res.status(201).json({  
    message: "User succesfully added!",
    addedTodo: newUser,
    // allTodosAfterAddition: updatedAllTodosAfterSave
  });
};
