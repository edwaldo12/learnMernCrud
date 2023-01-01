import Router from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControllers.js";
import verifyToken from "../middleware/index.js";

import { loginUser, refreshedToken } from "../controllers/authController.js";
const router = Router({
  caseSensitive: true,
});

router.post("/api/add-user", addUser);
router.get("/api/get-users", getUsers);
router.get("/api/get-user/:id", getUser);
router.post("/api/update-user/:id", updateUser);
router.delete("/api/delete-user/:id", deleteUser);

//user
router.post("/api/login-user", loginUser);
router.post("/api/refresh-token", refreshedToken);
export default router;
