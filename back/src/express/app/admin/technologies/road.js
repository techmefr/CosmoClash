import express from "express";
import {
    index,
    findTechno,
    createTechno,
    putTechnoController,
    patchOneTechno
} from "./controller.js";

export const shipsRoad = express.Router();

shipsRoad
    .get('/', index)
    .get('/:id', findTechno)
    .post('/created', createTechno)
    .put('/updated/:id', putTechnoController)
    .patch('/updated/:id', patchOneTechno)

export default shipsRoad;