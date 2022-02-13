// this is the package we installed that allows us to connect to our postgres db
const pgp = require("pg-promise")();
// allows us to access our .env variables
require("dotenv").config();

const ssl = { rejectUnauthorized: false };
const max = 30;

// this is the object we are passing to pr-promise so we can connect to the proper db
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  max,
  ssl,
};

const config = {
  connectionString: process.env.DATABASE_URL,
  max,
  ssl,
};

const database = pgp(cn);

module.exports = database;
