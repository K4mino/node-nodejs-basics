import { spawn } from 'child_process';
import path from 'path';
import {__dirname} from '../util.js';
const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn("node",[path.join(__dirname(import.meta.url), 'files','script.js'), ...args],{stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

    child.stdout.on('data', (data) => {
        console.log(`Child Process: ${data}`);
    });

    child.on('error', (err) => {
        console.error(err)
    });

    child.stdin.write('Hello from master process');
    child.stdin.end();
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3,4] /* [someArgument1, someArgument2, ...] */);
