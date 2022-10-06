const mysql = require('mysql2'); 
const con = mysql.createConnection({

    host: "localhost",
    user: "harsh",
    password: "root123",
    database: "RESULT",
    port: 3306
});

con.connect((err)=>{
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con= con;