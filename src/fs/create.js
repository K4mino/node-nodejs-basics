import fs from 'fs';
import path from 'path';
import {__dirname} from '../util.js';

const create = async () => {
    if(fs.existsSync(path.join(__dirname(import.meta.url), 'files', 'fresh.txt'))) {
        throw 'FS operation failed';
    }

    fs.writeFile(path.join(__dirname(import.meta.url), 'files', 'fresh.txt'), 'I am fresh and young', (err) => {
        if(err) throw err;

        console.log('Success')
    })
};

await create();