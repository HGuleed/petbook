// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
<<<<<<< HEAD

=======
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });
>>>>>>> f59ab9cdb596f7d112dd88e4605acc284b1cbd3b

module.exports = sequelize;
