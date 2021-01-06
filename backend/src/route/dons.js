const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";


const db = require('../db');

// Faite un Don

routes.post('/AddDon', function (req, res) {
    let don = `INSERT INTO dons (nom, prenom, montant, date_don, user_affilier) VALUES ('${req.body.nom}','${req.body.prenom}','${req.body.montant}','${req.body.date_don}','${req.body.user_affilier}')`
    db.query(don, function (err, result) {
        if (err) res.send(err)
        else res.send(result)
    })
});

// Afficher les dons

routes.get('/GetDon', function (req, res) {
    let aff = `SELECT * FROM dons`
    db.query(aff, function (err, result) {
        if (err) console.log(err)
        res.send(result)
    })
});


// Modifier une annonce 

routes.put('/ModDon/:id', function (req, res) {
    let mod = `UPDATE dons
    SET nom = '${req.body.nom}', prenom  = '${req.body.prenom}', 
    montant = '${req.body.montant}', date_don = '${req.body.date_don}'
    WHERE id_don= ${req.params.id}`
    db.query(mod, function (err, result) {
        if (err) console.log(err)
        res.send(result)
    })
    })

// supprimer un don 

routes.delete('/DeleteDon/:id', function (req, res) {
    let del = `DELETE FROM dons WHERE id_don = ${req.params.id}`

    db.query(del, function (err, result) {
        if (err) throw err;
        else res.send('bien supprimé')
    })
});






module.exports = routes