// Call express since node_module
import express from 'express'
// Call sequelize to get Connexion to DB
import sequelize from './config/db.js'
// Call all environnement variables
import {} from 'dotenv/config'
// use express dependancies
const app = express()
// Add port for running app content
const port = process.env.PORT || 6000

// Cannecte Elephant Cloud Postgresql DB with sequelize function
sequelize.testDbConnection()

// Add port listerning
app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`))  