import UserModel from "../models/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  try {
    const { nama, role, username, password, tanggal_lahir, email } = req.body;
    if (!nama || !role || !username || !password || !tanggal_lahir || !email) {
      res.status(401).json({
        status: 401,
        errorMessage: `Validation Error : nama: ${nama}, username: ${username}, password: ${password}, tanggal_lahir: ${tanggal_lahir}, email: ${email}`,
      });
      return;
    }
    const newUserModel = new UserModel({
      nama: nama,
      username: username,
      role: role,
      password: bcrypt.hashSync(password, 10),
      tanggal_lahir: tanggal_lahir,
      email: email,
    });
    const newUser = await newUserModel.save();
    const updatedUserAfterSave = await UserModel.find();

    res.status(201).json({
      message: "User succesfully added!",
      addedTodo: newUser,
      updatedUserAfterSave: updatedUserAfterSave,
    });
  } catch (error) {
    res.status(400).json({
      error,
      status: 400,
    });
  }
};

export const getUsers = async (req, res) => {
  console.log(req.headers["x-access-token"]);
  try {
    const users = await UserModel.find();
    res.status(200).json({
      status: 200,
      users,
    });
  } catch (error) {
    res.status(400).json({
      error,
      status: 400,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).exec();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({
      error,
      status: 400,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    if (
      !body.nama ||
      !body.role ||
      !body.username ||
      !body.password ||
      !body.tanggal_lahir ||
      !body.email
    ) {
      res.status(401).json({
        status: 401,
        errorMessage: `Validation error: _id or required body properties is not defined.`,
      });
      return;
    }
    body.password = bcrypt.hashSync(body.password, 10);

    const updatedUser = await UserModel.findByIdAndUpdate({ _id: id }, body);
    const allUpdatedUser = await UserModel.find();

    if (!updateUser) {
      res.status(501).json({
        status: 501,
        errorMessage: "Edit User Failed!. Server Error",
      });
    }

    res.status(200).json({
      status: 200,
      message: "User Succesfully updated",
      updatedUser,
      allUpdatedUser,
    });
  } catch (error) {
    res.status(400).json({
      error,
      status: 400,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(401).json({
        status: 401,
        errorMessage: `ValidationError : Params _id is not defined`,
      });
      return;
    }

    const deletedUser = UserModel.findByIdAndDelete(id);
    const allUserAfterDelete = UserModel.find();

    if (!deletedUser) {
      res.status(501).json({
        status: 501,
        errorMessage: "Remove todo failed. Not implemented .",
      });
      return;
    }

    res.status(200).json({
      message: "User succesfully removed",
      deletedUser,
      allUserAfterDelete,
    });
  } catch (error) {
    res.status(400).json({
      error,
      status: 400,
    });
  }
};

export const loginUser = async (req, res) => {
  const Token = process.env.ACCESS_TOKEN_SECRET;
  const { username, password } = req.body;

  const userLogin = await UserModel.findOne({ username: username });

  if (!userLogin) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid user or password." });
  }
  const verifiedToken = jwt.sign({ userLogin }, Token, { expiresIn: "1h" });
  res.setHeader("x-access-token", verifiedToken);
  bcrypt.compare(password, userLogin.password).then(() => {
    res.status(200).json({
      status: 200,
      Message: `Welcome ${username} you are succed to login!`,
      token: verifiedToken,
    });
  });
  return;
};
