const { Pool, Client } = require('pg')
import {Config} from "../../Config/Config";



export class PostgressConnection {

    constructor() {
        let db = Config.getPostGressConfig();
        console.log(db);

        const client = new Client({
            user: db.user,
            host: db.host,
            database: db.database,
            password: db.password,
            port: db.port
        })
        client.connect()



        //   client.query('select * from test_table ', (err, res) => {
        //     console.log(res.rows)
        //     client.end()
        //   })

        client
            .query('select * from test_table')
            .then(res => console.log(res.rows[0]))
            .catch(e => console.error(e.stack))



    }
}




/*
let query = 'select * from CATEGORIES';
let myConnection = new DatabaseConnection();
*/


/*DatabaseConnection.query("select * from CATEGORIES", function (error, results) {
    console.log(results);
});*/

