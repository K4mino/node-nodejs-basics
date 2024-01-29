import fs from 'fs'
import path from 'path';
import {__dirname} from '../util.js';
import { createGzip } from 'zlib';
const compress = async () => {
    fs.createReadStream(path.join(__dirname(import.meta.url), 'files','fileToCompress.txt'))
    .pipe(createGzip())
    .pipe(fs.createWriteStream(path.join(__dirname(import.meta.url), 'files','archive.gz')))
};

await compress();