"use strict";
import apiAdapter from "../helper/apiAdapter.js";
import { userServiceUrl } from "../config/urlApi.js";

export const getUsers = async (req, res) => {
  const apiUser = apiAdapter(userServiceUrl);
  await apiUser
    .get("/api/get-users")
    .then((success) => {
      let users = success.data.users;
      return res.status(200).json({
        users: users,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = async (req, res) => {
  let id = req.params.id;
  const apiUser = apiAdapter(userServiceUrl);
  await apiUser
    .get(`/api/get-user/${id}`)
    .then((success) => {
      return res.status(200).json({
        data: success.data.user,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUsers = async (req, res) => {
  const apiUser = apiAdapter(userServiceUrl);
  await apiUser
    .post("/api/add-user", req.body)
    .then((success) => {
      return res.status(200).json({
        users: success.data.message,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUser = async (req, res) => {
  const apiUser = apiAdapter(userServiceUrl);
  const id = req.params.id;
  await apiUser
    .put(`/api/update-user/${id}`, req.body)
    .then((success) => {
      console.log(success);
      return res.status(200).json({
        users: success.data.message,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error,
      });
    });
};

export const deleteUser = async (req, res) => {
  const apiUser = apiAdapter(userServiceUrl);
  const id = req.params.id;
  await apiUser 
    .delete(`/api/delete-user/${id}`)
    .then((success) => {
      return res.status(200).json({
        message: success.data.message,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
