import path from 'path';
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import  c from './files/c.js'
import  a from './files/a.json' assert { type: 'json' }
import  b from './files/b.json' assert { type: 'json' }
import {__dirname} from '../util.js';

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__dirname(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(__dirname(import.meta.url))}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

c()

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


