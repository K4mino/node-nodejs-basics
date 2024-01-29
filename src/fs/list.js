import fs from 'fs';
import path from 'path';
import {__dirname} from '../util.js';

const list = async () => {
    let arr= []

    if(!fs.existsSync(path.join(__dirname(import.meta.url), 'files'))) {
        throw 'FS operation failed';
    }

    fs.readdirSync(path.join(__dirname(import.meta.url), 'files')).forEach((file) => {
        arr.push(file)
    });

    console.log(arr)
};

await list();