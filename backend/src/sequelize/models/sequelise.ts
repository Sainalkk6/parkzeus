import { Options, Sequelize } from "sequelize";
import "dotenv/config"

const options: Options = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_DB_PORT as unknown as number,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  sync: { alter: true },
  logging:false
}

const sequelize = new Sequelize(options)


export default sequelize
