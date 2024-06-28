import { positionModel } from "../constants/index.js";

export const positionFindAll = () => positionModel.readAllPosition().then();
export const positionFind = id => positionModel.readOnePosition(id).then();
export const positionCreated = position => positionModel.createNewPosition(position).then();
export const putPosition = (position, id) => positionModel.putPosition(position, id).then();
export const patchPosition = (position, id) => positionModel.patchPosition(position, id).then();
export const deletePosition = id => positionModel.deletePosition(id).then();