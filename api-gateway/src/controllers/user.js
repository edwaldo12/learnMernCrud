"use strict";
import apiAdapter from "../helper/apiAdapter.js";
import { userServiceUrl } from "../config/urlApi.js";

// export default async function getUsers(req, res) {
//   const apiUser = apiAdapter(userServiceUrl);
//   const users = apiUser.get("/api/get-users");
//   return res.status(200).json({
//     users,
//   });
// }

export function getUsers(req, res) {
  const apiUser = apiAdapter(userServiceUrl);
  const users = apiUser.get("/api/get-users");
  return res.status(200).json({
    users,
  });
}

export function createUsers(req, res) {
  const apiUser = apiAdapter(userServiceUrl);
  apiUser
    .post("/api/add-user")
    .then((success) => {
      return res.status(200).json({
        users: success,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateUser(req, res) {
  const apiUser = apiAdapter(userServiceUrl);
  const id = req.params.id;
  apiUser
    .post(`/api/update-user/${id}`, { nama: "test" })
    .then((success) => {
      return res.status(200).json({
        users: success,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteUser(req, res) {
  const apiUser = apiAdapter(userServiceUrl);
  const id = req.params.id;
  apiUser
    .post(`/api/delete-user/${id}`, req.body)
    .then((success) => {
      return res.status(200).json({
        users: success,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
