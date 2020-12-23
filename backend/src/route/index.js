const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');






const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";


const db = require('../db');



// Ajouter un utilisateur ==> /Sign-Up

routes.post('/SignUp', function (req, res) {
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

routes.post('/SignIn', function (req, res) {
    let sql = `SELECT * FROM users where email = "${req.body.email}"`
    db.query(sql, function (err, result) {
        console.log(result)
        if (err) console.log(err)

        // compare les password ::: (envoie un msg n'existe pas la condition)

        if (result.length) {
            bcrypt.compare(req.body.password, result[0].password, function (err, response) {
                // genere le token
                let token = jwt.sign({ id: result[0].id, nom: result[0].nom }, 'aj_kneun34890shyéééççunhs8891111');
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

// Ajouter une annonce

routes.post('/AddAction', function (req, res) {
    let add = `INSERT INTO actions (nom_action, lieu, date_debute, date_fin) VALUES ('${req.body.non_action}','${req.body.lieu}','${req.body.date_debut}','${req.body.date_fin}')`;
    db.query(add, function (err, result) {
        if (err) res.send(err)
        else res.send(result)
    })
});


// Afficher les annonces 

routes.get('/GetAction', function (req, res) {
    let aff = `SELECT * FROM actions`
    db.query(aff, function (err, result) {
        // console.log(result)
        if (err) console.log(err)
        res.send(result)
    })
});

// supprimer une annonces


routes.delete('/DeleteAction', function (req, res){
    let del = "DELETE FROM actions WHERE id = '1"
    db.query(del, function (err, result){
      if(err) throw err;
      console.log('bien supprimé')
    })
  })




module.exports = routes