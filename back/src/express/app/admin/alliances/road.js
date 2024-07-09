import express from "express";
import {
    index,
    findAlliances,
    createAlliances,
    putAlliances,
    patchAlliances,
    deleteAlliances,
    playerAndPlanet
} from "./controller.js";

export const allianceRoad = express.Router();

allianceRoad
    .get('/', index)
    .get('/:id', findAlliances)
    .post('/created', createAlliances)
    .post('/getNbPlayerAndPlanet', playerAndPlanet)
    .put('/updated/:id', putAlliances)
    .patch('/updated/:id', patchAlliances)
    .delete('/deleted/:id', deleteAlliances);

export default allianceRoad;