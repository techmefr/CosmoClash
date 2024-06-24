import express from "express";
import {
    index,
    findActions,
    createActions,
    putActions,
    patchActions,
    deleteActions
} from "./controller.js";

const actionRoad = express.Router();

actionRoad
    .get('/', index)
    .get('/:id', findActions)
    .post('/created', createActions)
    .put('/updated/:id', putActions)
    .patch('/updated/:id', patchActions)
    .delete('/:id', deleteActions);

export default actionRoad;