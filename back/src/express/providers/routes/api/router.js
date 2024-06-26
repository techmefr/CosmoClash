import express from "express";
import {
    AdminShipsRoad,
    AdminActionsRoad,
    AdminPlanetsRoad,
    AdminResourcesRoad,
    AdminTechnologieRoad,
    AdminPositionsRoad
} from "../../../app/admin/index.js";
const apiRouter = express.Router();

apiRouter
    .use('/actions', AdminActionsRoad)
    .use('/planets', AdminPlanetsRoad)
    .use("/ships", AdminShipsRoad)
    .use('/resources', AdminResourcesRoad)
    .use("/technologies", AdminTechnologieRoad)
    .use("/positions", AdminPositionsRoad)

export default apiRouter;