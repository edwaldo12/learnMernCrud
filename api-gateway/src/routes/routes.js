import { Router, json } from "express";
import { loginUser } from "../controllers/controllers.js";

const router = Router({
  caseSensitive: true,
});

const jsonParser = json();

router.get("/users",)
router.post("/api/login-user", jsonParser, loginUser);

export default router;
