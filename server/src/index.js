const dotenv = require('dotenv')
const express = require('express');


// Parsing .env file
const env = {};
Object.entries(dotenv.config({path: '../.env'}).parsed).map(([key, value]) => {
    (() => {
        if(value.toLowerCase() === 'true') return value = true;
        if(value.toLowerCase() === 'false') return value = false;
        if(!isNaN(parseFloat(value))) return value = parseFloat(value);
    })()

    env[key] = value
})


const app = express();

if(env.PROD) {
    app.use(express.static('pub-build'))
}


app.listen(env.PORT, () => {
    console.log(`listening on http://localhost:${env.PORT}`);
})

