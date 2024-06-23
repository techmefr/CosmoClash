import { shipModel } from "../constants/index.js";

export const ShipsFindAll = () => shipModel.readAll().then();
export const ShipsFind = id => shipModel.readOneShips(id).then();
export const ShipsCreated = ship => shipModel.createNew(ship).then();
export const putShips = (ship, id) => shipModel.put(ship, id).then();
export const patchShips = (ship, id) => shipModel.put(ship, id).then();
export const patchPositionShips = (ship, id) => shipModel.updatePositionId(ship, id).then();
export const deleteShips = id => shipModel.delete(id).then();