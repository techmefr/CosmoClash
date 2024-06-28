import express from "express";
import {
    index,
    findAlliances,
    createAlliances,
    putAlliances,
    patchAlliances,
    deleteAlliances
} from "./controller.js";

export const allianceRoad = express.Router();

allianceRoad
    .get('/', index)
    .get('/:id', findAlliances)
    .post('/created', createAlliances)
    .put('/updated/:id', putAlliances)
    .patch('/updated/:id', patchAlliances)
    .delete('/deleted/:id', deleteAlliances);

export default allianceRoad;