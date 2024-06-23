import { shipModel } from "../constants/index.js";

export const shipFindAll = () => shipModel.readAll().then();
export const shipFind = id => shipModel.readOneShips(id).then();
export const ShipCreated = ship => shipModel.createNew(ship).then();
export const putShip = (ship, id) => shipModel.put(ship, id).then();
export const patchShip = (ship, id) => shipModel.put(ship, id).then();
export const deleteShip = id => shipModel.delete(id).then();