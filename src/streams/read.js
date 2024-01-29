import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';

const read = async () => {
    const  readable = fs.createReadStream(path.join(__dirname(import.meta.url), 'files','fileToRead.txt'))
     
    readable.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();