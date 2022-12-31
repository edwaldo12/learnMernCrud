import apiAdapter from "../helper/apiAdapter.js";
import jwt from "jsonwebtoken";
import { authServiceUrl } from "../config/urlApi.js";
import { keyJWT, keyRefresh } from "../config/auth.js";
import {parse, stringify, toJSON, fromJSON} from 'flatted';

export async function loginGateway(req, res) {
  try {
    const api = apiAdapter(authServiceUrl);
    let user = await api.post("/api/login-user", req.body);
    let data = user.data.userLogin;

    let token = jwt.sign(data, keyJWT, {
      expiresIn: "30m",
    });
    let refreshToken = jwt.sign(data, keyRefresh, {
      expiresIn: "1h",
    });

    await api.post("/api/create-token", {
      refresh_token: refreshToken,
      _id: data._id,
    });
    return res.status(200).json({
      status: "success",
      data: {
        token,
        refreshToken: refreshToken,
      },
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

export async function refreshingToken(req, res) {
  try {
    const api = apiAdapter(authServiceUrl);
    console.log(req.body);
    let user = await api.post("/api/create-token", {
      _id: req.body._id,
      refresh_token: req.body.refresh_token,
    });
    return res.status(200).json({ refreshToken: user });
  } catch (error) {
    console.log(`error msg ${error}`);
    return res.status(400).json({ error });
  }
}
