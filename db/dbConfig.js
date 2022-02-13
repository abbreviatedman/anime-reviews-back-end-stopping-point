// this is the package we installed that allows us to connect to our postgres db
const pgp = require("pg-promise")();
// allows us to access our .env variables
require("dotenv").config();

// this is the object we are passing to pr-promise so we can connect to the proper db
const cn = {
  DATABASE_URL: process.env.DATABASE_URL,
};

//  database is now our db i.e anime_dev
const database = pgp(cn);

module.exports = database;
