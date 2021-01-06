const express = require('express')
const app = express()
const routes = require('./route')
const annonce = require('./route/annonce')
const dons = require('./route/dons')
const cors = require('cors')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// ("/", a revoir)
app.use(routes)
app.use(annonce)
app.use(dons)




app.listen(3000);