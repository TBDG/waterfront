const dotenv = require('dotenv');
const massive = require('massive');
const path = require('path');

// Parsing .env file
const envPath = path.join(__dirname, '..', '..', '.env');
const env = process.env.NODE_ENV === 'PROD' ? process.env : dotenv.config({path: envPath}).parsed;

module.exports = (async () => {
    const db = await massive(`postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASS}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`);
    global.myDb = db;
    console.log('connected');
    let result = await db.seed.db();
    return console.log(result);
})();
