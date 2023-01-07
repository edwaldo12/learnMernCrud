import Router, { json } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControllers.js";

const router = Router({
  caseSensitive: true,
});

const jsonParser = json();

router.post("/api/add-user", jsonParser, addUser);
router.get("/api/get-users", getUsers);
router.get("/api/get-user/:id", getUser);
router.put("/api/update-user/:id", jsonParser, updateUser);
router.delete("/api/delete-user/:id", jsonParser, deleteUser);

export default router;
