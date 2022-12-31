import apiAdapter from "../helper/apiAdapter.js";
import jwt from "jsonwebtoken";
import { authServiceUrl } from "../config/urlApi.js";
import { keyJWT, keyRefresh } from "../config/auth.js";

export default async function loginGateway(req, res) {
  try {
    const api = apiAdapter(authServiceUrl);
    let user = await api.post("/api/login-user", req.body);
    // console.log(user.data.userLogin._id);
    // return res.json({ h: "h" });
    let data = user.data.userLogin;

    let token = jwt.sign(data, keyJWT, {
      expiresIn: "30m",
    });
    let refreshToken = jwt.sign(data, keyRefresh, {
      expiresIn: "1h",
    });

    await api.post(
      "/api/create-token",
      {
        refreshToken: refreshToken,
        _id: data._id,
      },
      {
        headers: {
          "x-access-token": token,
          "set-cookie": refreshToken,
        },
      }
    );
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
