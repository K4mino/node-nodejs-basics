import fs from 'fs';
import path from 'path';
import {__dirname} from '../util.js';

const copy = async () => {
    if(!fs.existsSync(path.join(__dirname(import.meta.url), 'files'))) {
        throw 'FS operation failed';
    }

    if(fs.existsSync(path.join(__dirname(import.meta.url), 'files_copy'))) {
        throw 'FS operation failed';
    }

    fs.access(path.join(__dirname(import.meta.url), 'files_copy'), fs.constants.F_OK, (err) => {
        if(!err) throw 'FS operation failed'
    });

    fs.mkdir(path.join(__dirname(import.meta.url), 'files_copy'), {recursive: true}, (err) => {
        if(err) throw err
    })

   
    fs.readdirSync(path.join(__dirname(import.meta.url), 'files')).forEach((file) => {
        fs.copyFile(path.join(__dirname(import.meta.url), 'files', file), path.join(__dirname(import.meta.url), 'files_copy', file), (err) => {
            if(err) throw err
        })
    });
};

await copy();


