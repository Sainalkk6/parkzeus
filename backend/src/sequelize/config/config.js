import "dotenv/config"
export default{
  development: {
    username: process.env.POSTGRES_USERNAME,
    password:  process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST ,
    dialect: "postgres"
  },
  test: {
    username: process.env.POSTGRES_USERNAME,
    password:  process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST ,
    dialect: "postgres"
  },
  production: {
    username: process.env.POSTGRES_USERNAME,
    password:  process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST ,
    dialect: "postgres"
  }
}

