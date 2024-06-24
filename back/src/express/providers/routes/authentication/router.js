import express from "express";
import authenticatedRoad from "../../../app/authentication/road.js";

const authRouter = express.Router();
authRouter.use('/', authenticatedRoad);
export default authRouter;
