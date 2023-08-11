import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect: 'postgresql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: true
  } )

  try {
    db.authenticate();
    console.log("DB connected")
  } catch (error) {
      console.log("Connexion error")
  }
    
export default db; 

(async () => {
  await db.sync({alter: true})
})()