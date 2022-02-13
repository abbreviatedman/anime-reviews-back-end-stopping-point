// this is the package we installed that allows us to connect to our postgres db
const pgp = require("pg-promise")();
// allows us to access our .env variables
require("dotenv").config();

// this is the object we are passing to pr-promise so we can connect to the proper db
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

console.log(
  "postgres://olwhjzrzznzcex:37045a5593cf766391a4f77bb50dd0109017dba767ebdabe8ed7118feffda146@ec2-54-159-244-207.compute-1.amazonaws.com:5432/d8nqginudrrpiq"
);

//  database is now our db i.e anime_dev
const database = pgp(cn);

module.exports = database;
