const dotenv = require('dotenv');
const massive = require('massive');
const path = require('path');

// Parsing .env file
const envPath = path.join(__dirname, '..', '..', '.env');
const env = dotenv.config({path: envPath}).parsed;

(async () => {
    const db = await massive(`postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASS}@localhost:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`);
    console.log('connected');
    let result = await db.seed.db();
    console.log(result);
})();
