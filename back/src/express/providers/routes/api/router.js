import express from "express";
import actionRoad from "./../../../app/admin/actions/road.js";
import planetRoad from "./../../../app/admin/planets/road.js";
const apiRouter = express.Router();

apiRouter
    .use('/actions', actionRoad)
    .use('/planets', planetRoad);

export default apiRouter;