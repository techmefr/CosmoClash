import { resourceModel } from "../constants/index.js";

export const resourceFindAll = () => resourceModel.readAllResources().then();
export const resourceFind = id => resourceModel.readOneResources(id).then();
export const resourceCreated = resource => shipModel.createNewResources(resource).then();
export const resourceUpdateAllData = (planet, id) => resourceModel.putResources(planet, id).then();
export const resourceUpdateOneData = (planet, id) => resourceModel.patchResources(planet, id).then();
export const resourceDeleted = id => resourceModel.deleteResources(id).then();