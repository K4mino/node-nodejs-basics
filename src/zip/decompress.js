import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';
import { createGunzip } from 'zlib';
const decompress = async () => {
    fs.createReadStream(path.join(__dirname(import.meta.url), 'files','archive.gz'))
    .pipe(createGunzip())
    .pipe(fs.createWriteStream(path.join(__dirname(import.meta.url), 'files','fileToCompress.txt')))
};

await decompress();