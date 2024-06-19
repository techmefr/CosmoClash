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
    .post('/actions/created', createActions)
    .put('/actions/updated/:id', putActions)
    .patch('/actions/updated/:id', patchActions)
    .delete('/actions/:id', deleteActions);

export default actionRoad;