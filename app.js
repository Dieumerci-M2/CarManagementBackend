// Call express since node_module
import express from 'express'
// Call sequelize to get Connexion to DB
import sequelize from './config/configDb.js'
// Call all environnement variables
import { } from 'dotenv/config'
import dotenv from 'dotenv'
// use express dependancies
const app = express()
dotenv.config();
// Add port for running app content
const port = process.env.PORT || 6000
// Connecte Elephant Cloud Postgresql DB with sequelize function
sequelize.testDbConnection()
// Create differentes roads
app.get( "/", ( req, res ) => {
    res.send("All is going very well")
})
// Add port listerning
app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`))  