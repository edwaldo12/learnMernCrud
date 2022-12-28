import Router from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
} from "../controllers/controllers.js";

const router = Router({
  caseSensitive: true,
});

router.post("/api/add-user", addUser);
router.get("/api/get-users", getUsers);
router.get("/api/get-user/:id", getUser);
router.put("/api/update-user/:id", updateUser);
router.delete("/api/delete-user/:id", deleteUser);
router.get("/api/login-user", loginUser);

export default router;
