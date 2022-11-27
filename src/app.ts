const express = require('express');
import {PostgressConnection} from "./Database/Postgress/PostgressConnection"


const app = express();
const port = 3001;




app.use(function (req: any, res: any, next: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/toto', (req:any, res:any) => {
        res.send("toto");
});

app.get('/',  async (req:any, res:any) => {
    let connection = new PostgressConnection();
    let queryInfo  =  await connection.query();
    res.send(queryInfo.rows[0]);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

