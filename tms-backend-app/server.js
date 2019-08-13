var express = require('express');
var app = express();
var mysql = require('mysql');

const PORT = 4000;
const HOST = 'localhost';
const USER = 'root';
const PASSWORD = '';
const DATABASE = 'tms';

//create a connection to the database
const db = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

//connect to the database
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Connected to database', DATABASE);
});

//app listening on PORT
app.listen(PORT, ()=> {
    console.log('Server running on port 4000');
});