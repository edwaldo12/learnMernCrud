import apiAdapter from "../helper/apiAdapter.js";
import jwt from "jsonwebtoken";
import { authServiceUrl } from "../config/urlApi.js";
import { keyJWT, keyRefresh } from "../config/auth.js";

export const loginGateway = async (req, res) => {
  const api = apiAdapter(authServiceUrl);
  try {
    let user = await api.post("/api/login-user", req.body);
    let data = user.data.userLogin;

    let token = jwt.sign(data, keyJWT, {
      expiresIn: "30m",
    });
    let refreshToken = jwt.sign(data, keyRefresh, {
      expiresIn: "1h",
    });

    await api.post("/api/create-token", {
      _id: data._id,
      refresh_token: refreshToken,
    });
    
    return res.status(200).json({
      status: "success",
      data: {
        token,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(401).json({
      Message: "Wrong username or password!",
    });
  }
};

// export const refreshingToken = async (req, res) => {
//   try {
//     const api = apiAdapter(authServiceUrl);
//     await api
//       .post("/api/create-token", {
//         _id: req.body._id,
//         refresh_token: req.body.refresh_token,
//       })
//       .then((success) => {
//         return res.status(200).json({ refreshToken: success.data.data.token });
//       })
//       .catch((error) => {
//         return res
//           .status(400)
//           .json({ Message: "Your id or refresh token is wrong!" });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getTokenFromRefreshedToken = async (req, res) => {
  try {
    const api = apiAdapter(authServiceUrl);
    let tokenFromBody = req.body.refresh_token;

    let newToken = await api.post("/api/get-token", {
      refresh_token: tokenFromBody,
    });
    newToken = newToken.data.token.token;

    let tokenNew = jwt.verify(newToken, keyRefresh, (err, decoded) => {
      if (err) {
        return res.status(404).json({
          Status: "you aren't authorized!",
        });
      }
      return decoded;
    });

    delete tokenNew.exp;
    delete tokenNew.iat;

    const token = jwt.sign(tokenNew, keyJWT, { expiresIn: "2h" });
    return res.status(200).json({
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
