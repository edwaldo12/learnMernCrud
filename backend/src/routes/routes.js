import { Router, json } from "express";
import { addUser } from "../controllers/controllers.js";

const router = Router({
  caseSensitive: true,
});

const jsonParser = json();

router.post("/api/add-user", jsonParser, addUser);

export default router;
