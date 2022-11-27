const express = require('express');
// import {DatabaseConnection} from "./Database/DatabaseConnection"
import {PostgressConnection} from "./Database/Postgress/PostgressConnection"


const app = express();
const port = 3001;


let msg = {type: "message",text: "Hello"};
let objJson = {"name":"John", "age":30, "car":27}


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

app.get('/', (req:any, res:any) => {


    let connect = new PostgressConnection();
    res.send('totooo');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

