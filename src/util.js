import path from 'path';
import {fileURLToPath} from 'url';

export const __dirname = (filePath) => path.dirname(fileURLToPath(filePath));