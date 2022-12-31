import Router from "express";
import {loginGateway, refreshingToken} from "../controllers/auth.js";
import verifyToken from "../middleware/index.js";
import getUsers from "../controllers/user.js";

const router = Router({
  caseSensitive: true,
});

// router.post("/api/login-user", jsonParser, loginUser);

router.post("/login", loginGateway);
router.get("/users", verifyToken, getUsers);
router.post('/refresh-token', refreshingToken)
// router.post("/users", verifyToken, loginGateway)

export default router;
