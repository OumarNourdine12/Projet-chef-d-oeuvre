const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";


const db = require('../db');




// Ajouter une annonce

routes.post('/AddAction', function (req, res) {
    let add = `INSERT INTO actions (nom_action, lieu, date_debut, date_fin) VALUES ('${req.body.nom_action}','${req.body.lieu}','${req.body.date_debut}','${req.body.date_fin}')`
    db.query(add, function (err, result) {
        if (err) res.send(err)
        else res.send(result)
    })
});


// Afficher les annonces 

routes.get('/GetAction', function (req, res) {
    let aff = `SELECT * FROM actions`
    db.query(aff, function (err, result) {
        if (err) console.log(err)
        res.send(result)
    })
});


// Modifier une annonce 

routes.put('/ModAction/:id', function (req, res) {
    let mod = `UPDATE actions
    SET nom_action = '${req.body.nom_action}', lieu  = '${req.body.lieu}', 
    date_debut = '${req.body.date_debut}', date_fin = '${req.body.date_fin}'
    WHERE id= ${req.params.id}`
    db.query(mod, function (err, result) {
        if (err) console.log(err)
        res.send(result)
    })
    })


    // supprimer une annonces

routes.delete('/DeleteAction/:id', function (req, res) {
    let del = `DELETE FROM actions WHERE id = ${req.params.id}`
    db.query(del, function (err, result) {
        if (err) throw err;
        else res.send('bien supprimé')

    })
});











module.exports = routes