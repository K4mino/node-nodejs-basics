import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';
const read = async () => {
    if(!fs.existsSync(path.join(__dirname(import.meta.url),'files', 'fileToRead.txt'))) {
        throw 'FS operation failed';
    }

    fs.readFile(path.join(__dirname(import.meta.url), 'files','fileToRead.txt'), 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    })
};

await read();
