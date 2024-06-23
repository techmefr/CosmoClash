import { shipModel } from "../constants/index.js";

export const shipFindAll = () => shipModel.readAllShip().then();
export const shipFind = id => shipModel.readOneShips(id).then();
export const shipCreated = ship => shipModel.createNewShip(ship).then();
export const putShip = (ship, id) => shipModel.putShips(ship, id).then();
export const deleteShip = id => shipModel.deleteShips(id).then();