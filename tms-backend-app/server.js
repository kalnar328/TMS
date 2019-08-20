const express = require('express');
const app = express();

const mysql = require('mysql');

//express middleware to read HTTP POST data from forms and store as javascript objects
const bodyParser = require('body-parser');
const cors = require('cors');

//parse text as URL encoded data
// app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 
app.use(cors());

app.use((req,res,next)=>{ 
    res.setHeader('Access-Control-Allow-Origin','*'); 
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type'); 
    res.setHeader('Access-Control-Allow-Credentials',true); 
    next(); 
})

const PORT = 4000;

const config = require('./db');

/* create a connection to the database */
const db = mysql.createConnection({
    host: config.database.HOST,
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

/* connect to the database */
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Connected to database', config.database.DATABASE);
});

global.db = db;

var routes = require('./routes/route');
app.use('/', routes);

/* app listening on PORT */
app.listen(PORT, ()=> {
    console.log('Server running on port', PORT);
});