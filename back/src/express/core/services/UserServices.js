import { userModel } from './../constants/index.js';

export const userFindAll = () => userModel.readAllUsers().then();
export const userFindById = id => userModel.readOneUsersByIdOrEmail(id).then();
export const userFindByEmail = email => userModel.readOneUsersByIdOrEmail(email).then();
export const userCreated = user => userModel.createNewUser(user).then();
export const userUpdateAllData = (user, id) => userModel.putUsers(...user, id).then();
export const userUpdateOneData = (user, id) => userModel.patchUsers(...user, id).then();
export const userDeleted = id => userModel.deleteUsers(id).then();