import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';
const rename = async () => {
    if(!fs.existsSync(path.join(__dirname(import.meta.url),'files','wrongFilename.txt'))) {
        throw 'FS operation failed';
    }

    if(fs.existsSync(path.join(__dirname(import.meta.url), 'files','properFilename.md'))) {
        throw 'FS operation failed';
    }

    fs.rename(path.join(__dirname(import.meta.url),'files', 'wrongFilename.txt'), path.join(__dirname(import.meta.url), 'files','properFilename.md'), (err) => {
        if (err) throw err;
        console.log('Success');
      }); 
};

await rename();