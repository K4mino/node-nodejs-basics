import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';

const write = async () => {
    const  writeAble = fs.createWriteStream(path.join(__dirname(import.meta.url), 'files','fileToWrite.txt'))

    process.stdin.on('data', (data) => {
        writeAble.write(data)
    })
};

await write();