

export class Config {

    static getPostGressConfig() {
        const config = require('./config.json');
        return (config.pg);
    }

}

