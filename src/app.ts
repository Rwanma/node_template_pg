const express = require('express');
import { PostgressConnection } from "./Database/Postgress/PostgressConnection"
import { PrismaExample } from "./Database/Prisma/Prisma"

import { MyLogger } from './Logger/logger'

let logger = new MyLogger();

const app = express();
const port = 3001;

app.use(function (req: any, res: any, next: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/toto', (req: any, res: any) => {
    res.send("toto");
});


app.get('/createUser', (req: any, res: any) => {
    let newUser = new PrismaExample();
    newUser.createUser();
    res.send("UserCreated");
});



app.get('/getUsers', async (req: any, res: any) => {
    let newUser = new PrismaExample();
    let users = await newUser.getUsers();
    res.send(users);
});


app.get('/', async (req: any, res: any) => {
    logger.log('sending data to front end');
    let connection = new PostgressConnection();
    let queryInfo = await connection.query();
    res.send(queryInfo.rows[0]);
    logger.log('finished sending data to front end');

});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

