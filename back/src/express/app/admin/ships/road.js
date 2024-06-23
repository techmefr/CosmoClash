import express from "express";
import {
    index,
    addedPositionToShip,
    findShips,
    createShips,
    putShips,
    patchShips,
    deleteShip
} from "./controller_ship.js";

export const shipsRoad = express.Router();

shipsRoad
    .get('/', index)
    .get('/:id', findShips)
    .post('/created', createShips)
    .put('/updated/:id', putShips)
    .patch('/updated/:id', patchShips)
    .patch('/added/positions/:id', addedPositionToShip)
    .delete('/:id', deleteShip);

export default shipsRoad;