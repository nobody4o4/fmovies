import express from "express";
import userRouter from "./routes/user.route.js";

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use("/", userRouter);

export default mainRouter;
