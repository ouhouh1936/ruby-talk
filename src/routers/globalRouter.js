import express from "express";
import {
  testScreen,
  friendController,
  messageController,
  profileController,
} from "../controllers/globalController";
const globalRouter = express.Router();

globalRouter.get("/", testScreen);
globalRouter.get("/friends", friendController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);

export default globalRouter;
