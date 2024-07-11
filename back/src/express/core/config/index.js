import dotenv from 'dotenv';
dotenv.config();
const Config = {
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        pwd: process.env.DATABASE_PWD,
        dbName: process.env.DATABASE_DB_NAME,
        nbUsers: process.env.DATABASE_NB_USERS
    }
}

export default Config;