import express from "express";
import {
    index,
    findShips,
    createShips,
    putShips,
    patchOneShip
} from "./controller.js";

export const shipsRoad = express.Router();

shipsRoad
    .get('/', index)
    .get('/:id', findShips)
    .post('/created', createShips)
    .put('/updated/:id', putShips)
    .patch('/updated/:id', patchOneShip)

export default shipsRoad;