"use strict";

import UserModel from "../models/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { keyJWT, keyRefresh } from "../config/auth.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const userLogin = await UserModel.findOne({ username: username });

  if (!userLogin) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid user or password." });
  }
  const verifiedToken = jwt.sign({ userLogin }, keyJWT, { expiresIn: "10s" });
  res.setHeader("x-access-token", verifiedToken);

  const refreshToken = jwt.sign({ userLogin }, keyRefresh, {
    expiresIn: "1d",
  });
  bcrypt.compare(password, userLogin.password).then(() => {
    res.cookie("refresh-token", refreshToken, {
      httpOnly: true,
      samsite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 60,
    });
    res.status(200).json({
      status: 200,
      Message: `Welcome ${username} you are succed to login!`,
    });
  });
  return;
};
