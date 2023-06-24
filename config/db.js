import { Sequelize } from "sequelize" ;

const sequelize = new Sequelize(
    {
        username: 'root',
        password: '',
        database: process.env.POSTGRESQL_DB_URI,
        host: '127.0.0.1',
        dialect: 'postgres'
    }
)

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { testDbConnection }