import dotenv from 'dotenv';
dotenv.config();
const Config = {
    app: {
        cors: {origin: process.env.APP_CORS_ORIGIN},
        staticPath: process.env.APP_STATIC_PATH
    },
    server: {
        port: process.env.SERVER_PORT,
        keysPath: process.env.SERVER_KEYS_PATH,
        certPath: process.env.SERVER_CERT_PATH,
        passPhrase: process.env.SERVER_PASSPHRASE,
        activateHttp1: !!process.env.SERVER_ACTIVATE_HTTP1
    }
}

export default Config;