import http2 from "http2";
import fs from "fs";
import app from "../express/app.js";
import Config from "../config/index.js";

http2.createSecureServer(
    {
        key: fs.readFileSync(Config.server.keysPath),
        cert: fs.readFileSync(Config.server.certPath),
        allowHTTP1: Config.server.activateHttp1,
        passphrase: Config.server.passPhrase
    },
    app
).listen(Config.server.port);