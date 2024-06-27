import express from "express";
import {
    index,
    findPosition,
    createPosition,
    putPositionController,
    patchOnePosition,
    positionDelete,
} from "./controller.js";

export const positionRoad = express.Router();

positionRoad
    .get('/', index)
    .get('/:id', findPosition)
    .post('/created', createPosition)
    .put('/updated/:id', putPositionController)
    .patch('/updated/:id', patchOnePosition)
    .delete('/:id', positionDelete);

export default positionRoad;