// Call sequelize ORM
import { Sequelize } from "sequelize";
// Call dotenv 
import dotenv from 'dotenv';
// Load all environnement variables
dotenv.config();
// Create a Sequilize instance names db
const db = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect: 'postgresql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
  } )
   
export default db; 
