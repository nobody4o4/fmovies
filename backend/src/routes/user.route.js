import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import { jwtVerific } from "../middleware/userAuth.middleware.js";

const userRouter = Router();

userRouter.post("/register", userController.register);

userRouter.post("/login", userController.login);

userRouter.post("/auth", jwtVerific);

export default userRouter;
