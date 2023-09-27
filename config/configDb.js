import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect: 'postgresql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
  } )

 
    
export default db; 
