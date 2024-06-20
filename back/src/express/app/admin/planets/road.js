import express from "express";
import {
    index,
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
    .delete('/:id', deletePlanets);

export default planetRoad;