import {Worker} from 'worker_threads';
import os from 'os'
import {__dirname} from '../util.js';
import path from 'path';

const performCalculations = async () => {
    const result = []
    const workers = []
    const cpus = os.cpus().length
    // Write your code here
    for(let i = 1; i <= cpus; i++) {
        const worker = new Worker(path.join(__dirname(import.meta.url), 'worker.js'),{workerData:{index:i,inc:10+i}});;

        const workerPromise = new Promise((resolve, reject) => {
            worker.on('message', (msg) => {    
                resolve(result.push({
                    status:'resolved',
                    data:msg
                }))
            })

            worker.on('error', () => {    
                resolve(result.push({
                    status:'error',
                    data:null
                }))
            })
        })

        await workerPromise
    };
        console.log(result)  
}


await performCalculations();