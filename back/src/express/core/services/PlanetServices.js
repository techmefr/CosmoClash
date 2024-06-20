import { planetModel } from "../constants/index.js";

export const planetFindAll = () => planetModel.readAllPlanet().then();
export const planetFind = id => planetModel.readOnePlanets(id).then();
export const planetCreated = planet => planetModel.createNewPlanets(planet).then();
export const putPlanet = (planet, id) => planetModel.putPlanets(planet, id).then();
export const patchPlanet = (planet, id) => planetModel.patchPlanet(planet, id).then();
export const deletePlanet = id => planetModel.deletePlanets(id).then();