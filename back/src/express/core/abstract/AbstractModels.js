import mysql from 'mysql2';
import Config from "../config/index.js";

export default class AbstractModels {
    connexion = null;
    constructor() {
        this.singleton();
    }
    singleton() {
        if(this.connexion === null) {
            this.connexion = mysql.createConnection({
                host: Config.database.host,
                user: Config.database.user,
                password: Config.database.pwd,
                database: Config.database.dbName
            })
            return this.connexion;
        } else {
            return this.connexion;
        }
    }
    stop() {
        this.connexion.stop();
    }
}