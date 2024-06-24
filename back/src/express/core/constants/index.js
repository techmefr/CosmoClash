import UserModel from './../models/UserModel.js'
import ActionModel from "../models/ActionModel.js";
import PlanetModel from "../models/PlanetModel.js";
import ShipsModel from '../models/ShipsModel.js';
import ResourceModel from "../models/ResourceModel.js";

export const userModel = new UserModel();
export const actionModel = new ActionModel();
export const planetModel = new PlanetModel();
export const shipModel = new ShipsModel()
export const resourceModel = new ResourceModel();