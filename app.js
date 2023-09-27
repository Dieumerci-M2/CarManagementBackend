// Call express since node_module
import express from 'express'
// Call Body-parser to parse the req.body to a JSON file
import bodyParse from 'body-parser'
// Call all environnement variables
import { } from 'dotenv/config'
import dotenv from 'dotenv'
// Call All routers
import routerUser from './src/routes/user/index.js'
import superRoute from './src/routes/superuser/index.js'
import userLogin from './src/routes/loginuser/index.js'
import superuserLogin from './src/routes/loginSuperuser/index.js'
import docsRoute from './src/routes/createDocument/index.js'
import findAllDocRoute from './src/routes/findAll Doc/findAllDoc.routes.js'
import updateRouter from './src/routes/UpdateDocument/updateDoc.routes.js'
import deleteDocRouter from './src/routes/DeleteDocument/deleteDoc.routes.js'
import findByPk from './src/routes/FindByPk/findByPk.routes.js'

import cors from "cors"
import db from './config/configDb.js'
import "./src/models/superUser.js"
import "./src/models/userModel.js"
import "./src/models/documentModel.js"
// use express dependancies
const app = express()
dotenv.config();
// Add port for running app content
const port = process.env.PORT || 6000

// DATABASE CONNECTION
 try {
    // db.authenticate();
     await db.sync({alter:true})
    console.log("DB connected")
  } catch (error) {
      console.log("Connexion error")
  }


//Middlewares
app
    .use( express.json() )
    .use( express.urlencoded( { extended: false } ) )
    .use( bodyParse.json() )
    .use(cors({methods:"GET,POST,PUT,DELETE,OPTIONS", allowedHeaders:"*",origin:"*"}))
//Routes
app.get( "/", ( req, res ) => {
    res.send("All is going very well")
} )
app
    .use( "/user", routerUser )
    .use( "/superuser", superRoute )
    .use( "/userLogin", userLogin )
    .use( "/superuserLogin", superuserLogin )
    .use( "/document", docsRoute )
    .use( "/document", findAllDocRoute )
    .use( "/document", updateRouter )
    .use( "/document", deleteDocRouter )
    .use( "/document", findByPk )
    .use( (err, req, res, next) => {
        res.status(400).json({message: "ERROR OCCURED", data : err})
    })

// Add port listerning
app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`))  