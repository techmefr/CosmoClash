import ActionModel from "../models/ActionModel.js";
import AllianceModel from '../models/AllianceModel.js';
import PlanetModel from "../models/PlanetModel.js";
import PositionModel from "../models/PositionModel.js";
import ResourceModel from "../models/ResourceModel.js";
import ShipsModel from '../models/ShipsModel.js';
import TechnologiesModel from "../models/TechnologiesModel.js";
import UserModel from './../models/UserModel.js'
import AlliancesMembersModels from "../models/AlliancesMembersModels.js";
import MarketTransactionModel from "../models/MarketTransactionModels.js";
import MarketShipsModels from "../models/MarketShipsModels.js";
import PlanetShipsModel from "../models/PlanetShipsModel.js";

export const actionModel = new ActionModel();
export const allianceModel = new AllianceModel()
export const allianceMembersModel = new AlliancesMembersModels();
export const planetModel = new PlanetModel();
export const planetShipsModel = new PlanetShipsModel();
export const positionModel = new PositionModel();
export const resourceModel = new ResourceModel();
export const shipModel = new ShipsModel();
export const technologieModel = new TechnologiesModel();
export const userModel = new UserModel();
export const marketTransactionModel = new MarketTransactionModel();
export const marketShipsModel = new MarketShipsModels();
