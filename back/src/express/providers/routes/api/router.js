import express from "express";
import actionRoad from "./../../../app/admin/actions/road.js";
const apiRouter = express.Router();

apiRouter.use('/actions', actionRoad);

export default apiRouter;