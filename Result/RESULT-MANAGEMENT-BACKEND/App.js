const bodyParser = require('body-parser');
const express = require('express');
let router = express.Router();
const app = express();
const port = 3004
var cors = require('cors');
const parser = require('body-parser');
const mysql = require('./connection').con;
//configration

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
    }));

    app.use(bodyParser.json());

//Routing
app.get("/",(req, res)=>{
    res.send("Harsh");
});

//Show all Users
app.get("/show",(req,res)=>{
    let sql = 'select * from resultinfo';
    mysql.query(sql,function(err,result,field){
        if(err) throw err;
        res.status(200).json(result);
    });
});

//get result by id
app.get("/show/:id",(req,res)=>{
    let sql = 'select * from resultinfo where id ='+[req.params.id];
    console.log(sql)
    mysql.query(sql,function(err,result,field){
        if(err) throw err;
        res.status(200).json(result);
    });
});

//delete result by id
app.get("/delete/:id",(req,res)=>{
    let sql = 'delete from resultinfo where id ='+[req.params.id];
    console.log(sql)
    mysql.query(sql,function(err,result,field){
        if(err) throw err;
        res.status(200).json(result);
    });
});


//create server
app.listen(port, (err)=>{
    if(err)
        throw err
    else
        console.log("Server is running at port %d:", port);
});