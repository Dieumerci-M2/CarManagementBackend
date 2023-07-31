import Sequelize from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect: 'postgresql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
    })

const testDbConnection = async () => {
  console.log( process.env );
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { testDbConnection }