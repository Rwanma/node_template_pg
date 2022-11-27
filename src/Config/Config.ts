

export class Config {

    static getDatabaseConfig() {
        const config = require('./config.json');
        return(config.database);
    }


    static getPostGressConfig() {
        const config = require('./config.json');
        return(config.pg);
    }

}



console.log(Config.getPostGressConfig());
