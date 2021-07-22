import express from "express";
import {
  friendController,
  messageController,
  profileController,
  loginController,
  mainController,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/friends", friendController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);

globalRouter.post("/login", loginController);

export default globalRouter;
