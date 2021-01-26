const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const massive = require('massive');
const path = require('path');

// Parsing .env file
const envPath = path.join(__dirname, '..', '..', '.env');
const env = {};
Object.entries(dotenv.config({path: envPath}).parsed).map(([key, value]) => {
    (() => {
        if (value.toLowerCase() === 'true') return value = true;
        if (value.toLowerCase() === 'false') return value = false;
        if (/\w/i.test(value)) return;
        if (!isNaN(parseFloat(value))) return value = parseFloat(value);
    })();

    env[key] = value;
});

const startup = async () => {
    const app = express();

    app.use(bodyParser.json());

    if (env.PROD) {
        app.use(express.static('pub-build'));
    }

    const routes = require('./controllers/index');
    app.use('/api', routes);


    app.listen(env.SERVER_PORT, () => {
        console.log('listening on http://localhost:' + env.SERVER_PORT);
    });
};


/**
 * Ensure we either do have connection to database or do not have it then start express
 * */
massive(`postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASS}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`).then((db) => {
    global.myDb = db;
    console.log('connected to db');
    startup();
}).catch((error) => {
    console.error(error);
    console.log('starting without db');
    startup();
});

