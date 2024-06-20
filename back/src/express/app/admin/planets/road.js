import express from "express";
import {
    index,
    addedPositionToPlanet,
    findPlanets,
    createPlanets,
    putPlanets,
    patchPlanets,
    deletePlanets
} from "./controller.js";

export const planetRoad = express.Router();

planetRoad
    .get('/', index)
    .get('/:id', findPlanets)
    .post('/created', createPlanets)
    .put('/updated/:id', putPlanets)
    .patch('/updated/:id', patchPlanets)
    .patch('/added/positions/:id', addedPositionToPlanet)
    .delete('/:id', deletePlanets);

export default planetRoad;