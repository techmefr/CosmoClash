import express from 'express';
import http2Express from "http2-express-bridge";
import cors from 'cors';
import morgan from 'morgan';

import bodyParser from "body-parser";
import Config from "../config/index.js";

morgan.token('id', function getId (req) {
    return req.id
})

const app = http2Express(express)
    .use(express.static(Config.app.staticPath))
    .use(morgan('dev'))
    .use(cors(Config.app.cors))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .get('/', (req, res) => res.send('Hello world'));

export default app;