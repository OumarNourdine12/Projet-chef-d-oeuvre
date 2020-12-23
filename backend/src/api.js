const express = require('express')
const app = express()
const routes = require('./route')
const cors = require('cors')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


app.use(routes)


app.listen(3000);