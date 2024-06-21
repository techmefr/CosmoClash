import express from "express";
import {
    index,
    findResource,
    putResource,
    patchResource,
    deletedResource
} from './controller.js';

const resourceRoad = express.Router();

resourceRoad
    .get('/', index)
    .get('/:id', findResource)
    .put('/:id', putResource)
    .patch('/updated/:id', patchResource)
    .delete('/:id', deletedResource);

export default resourceRoad;