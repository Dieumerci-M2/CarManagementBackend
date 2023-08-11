// Call express since node_module
import express from 'express'
// Call Body-parser to parse the req.body to a JSON file
import bodyParse from 'body-parser'
// Call all environnement variables
import { } from 'dotenv/config'
import dotenv from 'dotenv'
import routerUser from './src/routes/user/index.js'
// use express dependancies
const app = express()
dotenv.config();
// Add port for running app content
const port = process.env.PORT || 6000
//Middlewares
app
    .use( express.json() )
    .use( express.urlencoded( { extended: false } ) )
    .use(bodyParse.json())
//Routes
app.get( "/", ( req, res ) => {
    res.send("All is going very well")
} )
app.use( "/user", routerUser )
// Add port listerning
app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`))  