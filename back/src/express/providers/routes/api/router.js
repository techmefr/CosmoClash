import express from "express";
import {AdminShipsRoad, AdminActionsRoad, AdminPlanetsRoad, AdminResourcesRoad} from "../../../app/admin/index.js";
const apiRouter = express.Router();

apiRouter
    .use('/actions', AdminActionsRoad)
    .use('/planets', AdminPlanetsRoad)
    .use("/ships", AdminShipsRoad)
    .use('/resources', AdminResourcesRoad);

export default apiRouter;