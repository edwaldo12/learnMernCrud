"use strict";
import apiAdapter from "../helper/apiAdapter.js";
import { userServiceUrl } from "../config/urlApi.js";

export default async function getUsers(req, res) {
  const apiUser = apiAdapter(userServiceUrl);
  const users = apiUser.get("/api/get-users");
  return res.status(200).json({
    users,
  });
}
