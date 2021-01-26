/**
 * This file moved the build files to the server folder for hosting
 */
const fs = require('fs');

const buildDir = './build/';
const destinationDir = '../server/pub-build';

if (fs.existsSync(destinationDir) && fs.lstatSync(destinationDir).isDirectory()) {
    fs.rmdirSync(destinationDir, {recursive: true}, () => {
        console.log('huh');
    })
}

fs.renameSync(buildDir, destinationDir);
