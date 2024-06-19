import express from "express";
import {register} from './controller.js';
import { hashPassword } from "../../core/middlewares/authentication/hashPassword.js";

const authenticatedRoad = express.Router();
authenticatedRoad.post('/register', hashPassword, register);
export default authenticatedRoad;