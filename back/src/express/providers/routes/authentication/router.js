import express from "express";
import authenticatedRoad from "../../../app/authentication/road.js";
import { authRoad } from "../../../app/index.js";
import cors from 'cors';

const app = express();
// Utiliser cors pour toutes les routes
app.use(cors());


const authRouter = express.Router();
authRouter.use('/', authRoad);
export default authRouter;