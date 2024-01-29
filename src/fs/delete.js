import fs from 'fs';
import path from 'path';
import {__dirname} from '../util.js';

const remove = async () => {
    if(!fs.existsSync(path.join(__dirname(import.meta.url),'files', 'fileToRemove.txt'))) {
        throw 'FS operation failed';
    }

    fs.rm(path.join(__dirname(import.meta.url), 'files','fileToRemove.txt'), {recursive: true}, (err) => {
        if(err) throw err

        console.log('File removed')
    })
};

await remove();