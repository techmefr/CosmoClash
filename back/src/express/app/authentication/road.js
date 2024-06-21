import express from "express";
import {login, register} from './controller.js';
import { hashPassword } from "../../core/middlewares/authentication/hashPassword.js";

const authenticatedRoad = express.Router();

authenticatedRoad
    .post("/login", login)
    .post('/register', hashPassword, register);
export default authenticatedRoad;