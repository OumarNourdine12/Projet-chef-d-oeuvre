const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";


const db = require('../db');



// Ajouter un utilisateur ==> /Sign-Up

routes.post('/SignupForm', function (req, res) {
    console.log(req.body) 

    // hash password

    bcrypt.genSalt(saltRounds, (err, salt) => {
        console.log(salt)

        bcrypt.hash(req.body.password, salt, (err, hash) => {

            let sql = `INSERT INTO users (nom, prenom, email, password, adresse, code_postal, ville, pays) VALUES ('${req.body.nom}','${req.body.prenom}','${req.body.email}','${hash}','${req.body.adresse}','${req.body.code_postal}','${req.body.ville}','${req.body.pays}')`
            db.query(sql, function (err, result) {
                if (err) res.send(err)
                else res.send('Bien')
            })
        })
    })

});

// Controle si l'utilisateur est enregistré ==> /Sign-in

routes.post('/SigninForm', function (req, res) {

    let sql = `SELECT * FROM users where email = '${req.body.email}'`
    db.query(sql, function (err, result) {
        console.log(result)
        if (err) console.log(err)

        // compare les password ::: (envoie un msg n'existe pas la condition)
        console.log("RESULT LENGTH => ", result.length)
        if (result.length) {
            console.log('je suis dans le if')
            bcrypt.compare(req.body.password, result[0].password, function (err, response) {
                // genere le token
                console.log('jai comparer');
                console.log(response)
                let token = jwt.sign({ id: result[0].id, nom: result[0].nom }, 'aj_kneun34890shyéééççunhs8891111');
                if (response) {
                    res.send(token)
                }
                else {
                    res.status(203).send("Mot de pass incorrect")
                }
            });

        }
        else {
            res.status(203).send("Email n'existe pas")
        }
    })




});


routes.post('/SigninForm/admin', function (req, res) {
    let sql = `SELECT * FROM admin where email = "${req.body.email}"`
    db.query(sql, function (err, result) {
        console.log(result)
        if (err) console.log(err)

        // compare les password ::: (envoie un msg n'existe pas la condition)

        if (result.length) {
            bcrypt.compare(req.body.password, result[0].password, function (err, response) {
                // genere le token
                let token = jwt.sign({ id: result[0].id, nom: result[0].nom }, '$2a$10$0lfNBLmIF7cYh1mZXiMoz.ejoiB9INK3t/UY6NPKRy0');
                if (response) {
                    res.send(token)
                }
                else {
                    res.status(500).send("Mot de pass incorrect")
                }
            });

        }
        else {
            res.status(500).send("Email n'existe pas")
        }
    })




});





module.exports = routes