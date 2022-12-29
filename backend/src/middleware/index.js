import jwt from "jsonwebtoken";
import { keyJWT } from "../config/auth.js";

export const verifyToken = async (req, res, next) => {
  let cookieUser = req.headers["set-cookie"];
  let getAccessToken = cookieUser[0].split(";")[0].split("=")[1];
  let tokenUser = req.headers["x-acccess-token"];
  let decoded = jwt.verify(tokenUser, keyJWT);
  let role = decoded.userLogin.role;

  if (role != "Admin") {
    return res.status(403).json({
      Message: "Sorry you aren't authorized too do this process!",
    });
  }

  if (!tokenUser) {
    return res.status(403).json({
      Message: "Login first!",
    });
  } else {
    if (getAccessToken) {
      jwt.verify(getAccessToken, keyJWT, (err, decoded) => {
        let verifiedToken = jwt.sign(decoded, keyJWT, { expiresIn: "1h" });
        res.setHeader("x-access-token", verifiedToken);
        return res.status(200).json({
          Message: "you are authorized!",
        });
      });
      next();
    }
    return res.status(404).json({
      Message: "sorry your token is expired in all!",
    });
  }
};
