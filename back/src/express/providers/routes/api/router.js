import express from "express";
import {
    AdminShipsRoad,
    AdminActionsRoad,
    AdminPlanetsRoad,
    AdminResourcesRoad,
    AdminTechnologieRoad,
    AdminAllianceRoad
} from "../../../app/admin/index.js";
const apiRouter = express.Router();

apiRouter
    .use('/actions', AdminActionsRoad)
    .use('/planets', AdminPlanetsRoad)
    .use("/ships", AdminShipsRoad)
    .use('/resources', AdminResourcesRoad)
    .use("/technologies", AdminTechnologieRoad)
    .use("/alliances", AdminAllianceRoad)

export default apiRouter;