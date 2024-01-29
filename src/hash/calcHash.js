import {createHash} from 'crypto'
import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';

const calculateHash = async () => {

    fs.readFile(path.join(__dirname(import.meta.url), 'files','fileToCalculateHashFor.txt'), 'utf8', (err, data) => {
        if(err) throw err;
        process.stdout._write(createHash('sha256').update(data).digest('hex'))
    })

    
};

await calculateHash();