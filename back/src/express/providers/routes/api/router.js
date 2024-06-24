import express from "express";
import {AdminActionsRoad, AdminPlanetsRoad, AdminResourcesRoad} from "../../../app/admin/index.js";
import shipsRoad from "./../../../app/admin/ships/road.js";
const apiRouter = express.Router();

apiRouter
    .use('/actions', AdminActionsRoad)
    .use('/planets', AdminPlanetsRoad)
    .use("/ships", shipsRoad)
    .use('/resources', AdminResourcesRoad);

export default apiRouter;