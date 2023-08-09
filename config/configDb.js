import { Sequelize, DataTypes } from "sequelize";
//import userModel from "../models/userModel";
//import document from "../models/documentModel";
//import superUser from "../models/superUser";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect: 'postgresql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
  } )
    
    // let User = userModel(sequelize, DataTypes) 

const testDbConnection = async () => {
  //console.log( process.env );
  try {
    await sequelize.authenticate();
    console.log( "Connection has been established successfully." );
    // User.create( {
    //   userName: 'md',
    //   password : '1234'
    // } ).then( user => console.log( user.toJSON() ) )
    // console.log('la base de données a bien était initialisée')
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { testDbConnection }