import { allianceModel } from "../constants/index.js";

export const allianceFindAll = () => allianceModel.readAllAlliances().then();
export const allianceFind = id => allianceModel.readOneAlliances(id).then();
export const allianceCreated = alliance => allianceModel.createNewAlliance(alliance).then();
export const allianceUpdateAllData = (allinace, id) => allianceModel.putAlliances(allinace, id).then();
export const allianceUpdateOneData = (allinace, id) => allianceModel.patchAlliances(allinace, id).then();
export const allianceDeleted = id => allianceModel.deleteAlliances(id).then();