import Router from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/controllers.js";

import { verifyToken } from "../middleware/index.js";

const router = Router({
  caseSensitive: true,
});

router.post("/api/add-user", verifyToken, addUser);
router.get("/api/get-users",verifyToken, getUsers);
router.get("/api/get-user/:id", getUser);
router.put("/api/update-user/:id", verifyToken, updateUser);
router.delete("/api/delete-user/:id", verifyToken, deleteUser);

export default router;
