import ActionModel from "../models/ActionModel.js";
import AllianceModel from '../models/AllianceModel.js';
import PlanetModel from "../models/PlanetModel.js";
import PositionModel from "../models/PositionModel.js";
import ResourceModel from "../models/ResourceModel.js";
import ShipsModel from '../models/ShipsModel.js';
import TechnologiesModel from "../models/TechnologiesModel.js";
import UserModel from './../models/UserModel.js'
import PlanetTypeModel from "../models/PlanetTypeModel.js";

export const actionModel = new ActionModel();
export const allianceModel = new AllianceModel()
export const planetModel = new PlanetModel();
export const positionModel = new PositionModel();
export const resourceModel = new ResourceModel();
export const shipModel = new ShipsModel();
export const technologieModel = new TechnologiesModel();
export const userModel = new UserModel();
export const planetTypeModel = new PlanetTypeModel();