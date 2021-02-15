const {Client} = require('pg');
const dotenv = require('dotenv');
const path = require('path');

// Parsing .env file
const envPath = path.join(__dirname, '..', '..', '.env');
const env = dotenv.config({path: envPath}).parsed;


async function connect() {
    const client = new Client({
        user: env.POSTGRES_USER,
        password: env.POSTGRES_PASS,
        host: env.POSTGRES_HOST,
        database: env.POSTGRES_DB,
        port: env.POSTGRES_PORT,
    });
    await client.connect();
    client.end();
    return true;
}

async function seedDb() {
    return await require('./seed-db');
}


function startApp() {
    require('../src/server');
}


(() => {
    'use strict';
    let interval = setInterval(async () => {
        console.log('Trying database connect.');
        try {
            await connect();
            console.log('connected starting app');
            clearInterval(interval);
            await seedDb();
            startApp();
        } catch (e) {
            console.log(e);
            console.log('cannot connect trying again');
        }
    }, 3000);
})();
