"use strict";

import UserModel from "../models/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  res.setHeader("token", verifiedToken);
  bcrypt.compare(password, userLogin.password).then(() => {
    res.status(200).json({
      status: 200,
      Message: `Welcome ${username} you are succed to login!`,
      token: verifiedToken,
    });
  });
  return;
};
