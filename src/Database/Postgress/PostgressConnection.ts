const { Pool, Client } = require('pg')
import { Config } from "../../Config/Config";



export class PostgressConnection {
    client: any = null;

    constructor() {
        let db = Config.getPostGressConfig();

        this.client = new Client({
            user: db.user,
            host: db.host,
            database: db.database,
            password: db.password,
            port: db.port
        })
        this.client.connect();
    }


    async query() {
        let result = await this.client.query('select * from "public"."User"');
        console.log('result :', result.rows[0]);
        return result;
    }
}



