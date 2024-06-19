import { actionModel } from './../constants/index.js';

export const actionFindAll = () => actionModel.readAllActions().then();
export const actionFind = id => actionModel.readOneActions(email).then();
export const actionCreated = action => actionModel.createNewActions(action).then();
export const actionUpdateAllData = (action, id) => actionModel.putActions(action, id).then();
export const actionUpdateOneData = (action, id) => actionModel.patchActions(action, id).then();
export const actionDeleted = id => actionModel.deleteActions(id).then();