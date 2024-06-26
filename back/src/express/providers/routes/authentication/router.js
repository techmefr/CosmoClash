import express from "express";
import authenticatedRoad from "../../../app/authentication/road.js";
import { authRoad } from "../../../app/index.js";

const authRouter = express.Router();
authRouter.use('/', authRoad);
export default authRouter;