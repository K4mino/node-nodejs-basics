const parseEnv = () => {
    const variables = process.env;

    for (const [key, value] of Object.entries(variables)) {
        if(key.startsWith('RSS_')) {
            console.log(`${key} = ${value}`);
        }
    }
};

parseEnv();