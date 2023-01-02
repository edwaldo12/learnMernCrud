import Router from "express";
import {
  getTokenFromRefreshedToken,
  loginGateway,
  refreshingToken,
} from "../controllers/auth.js";
import verifyToken from "../middleware/index.js";
import {
  createUsers,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = Router({
  caseSensitive: true,
});

//Auth
router.post("/login", loginGateway);
router.post("/refresh-token", refreshingToken);
router.post("/generate-new-token", getTokenFromRefreshedToken);

//Backend
router.get("/users", verifyToken, getUsers);
router.get("/user/:id", verifyToken, getUser);
router.post("/user", verifyToken, createUsers);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);

export default router;
