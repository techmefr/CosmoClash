import dotenv from 'dotenv';
dotenv.config();
const Config = {
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        pwd: process.env.DATABASE_PWD,
        dbName: process.env.DATABASE_DB_NAME
    }
}

export default Config;