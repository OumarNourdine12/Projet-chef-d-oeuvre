const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";


var db = require('../db');




app.post('/SignUp' , function (req, res ){
    console.log(req.body)


    var sql = `INSERT INTO users (nom, email, password, is_admin) VALUES ('${req.body.nom}','${req.body.email}','${req.body.password}','${req.body.is_admin}', 0)`
    db.query(sql, function (err, result) {
        if(err) res.send(err)
        else res.send('Bien')
    });

})