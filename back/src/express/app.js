import express from 'express';
import http2Express from "http2-express-bridge";
import cors from 'cors';
import morgan from 'morgan';

import bodyParser from "body-parser";
import Config from "../config/index.js";
import { setHeader } from "./providers/responseApi/setHeader.js";
import apiRouter from "./providers/routes/api/router.js";
import authRouter from "./providers/routes/authentication/router.js";

morgan.token('id', function getId (req) {
    return req.id
})

const app = http2Express(express)
    .use(express.static(Config.app.staticPath))
    .use(morgan('dev'))
    .use(cors(Config.app.cors))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(setHeader)
    .use('/', authRouter)
    .use('/api', apiRouter);

export default app;